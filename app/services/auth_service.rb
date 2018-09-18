class AuthService
  class << self
    def sign_up!(params)
      User.create!(params)
    end
  end
end
