class Api::V1::Auth::UsersController < ApiController
  def create
    user = User.find_for_database_authentication(login: params[:login])
    if user&.valid_password?(params[:password])
      render json: payload(user)
    else
      render json: { errors: ['Invalid Username/Password'] }, status: :unauthorized
    end
  end

  def sign_up
    user = User.new(sign_up_params)

    if user.valid?
      user.save!
      render json: payload(user)
    else
      render json: { errors: user.errors }, status: :unprocessable_entity
    end
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
