class Api::V1::Auth::UsersController < ApiController
  def create
    user = AuthService.sign_up!(sign_up_params)

    render json: payload(user)
  rescue ActiveRecord::RecordInvalid => e
    render json: { errors: e.record.errors }, status: :unprocessable_entity
  rescue StandardError
    render json: { errors: ['Unknown error'] }, status: :unprocessable_entity
  end

  private

  def payload(user)
    return nil unless user&.id

    {
      auth_token: JsonWebToken.encode(user_id: user.id),
      user: { username: user.username }
    }
  end

  def sign_up_params
    params.permit(
      :username,
      :email,
      :password,
      :password_confirmation
    )
  end
end
