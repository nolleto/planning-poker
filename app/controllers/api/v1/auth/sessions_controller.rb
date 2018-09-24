class Api::V1::Auth::SessionsController < ApiController
  def create
    user = User.find_for_database_authentication(login: sign_in_params[:login])

    if user&.valid_password?(sign_in_params[:password])
      sign_in user
      render json: payload(user)
    else
      render json: { errors: ['Invalid Username/Password'] }, status: :unauthorized
    end
  end

  def destroy
    authenticate_request!
    sign_out current_user
  end

  private

  def payload(user)
    return nil unless user&.id

    {
      auth_token: JsonWebToken.encode(user_id: user.id),
      user: { username: user.username }
    }
  end

  def sign_in_params
    params.permit(
      :login,
      :password
    )
  end
end
