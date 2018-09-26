class User < ApplicationRecord
  attr_writer :login

  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable

  validates :username, presence: true, uniqueness: { case_sensitive: false }
  validate :validate_username

  def login
    @login || username || email
  end

  def self.find_for_database_authentication(warden_conditions)
    conditions = warden_conditions.dup

    if login = conditions.delete(:login)
      where(conditions.to_h).find_by(
        ['lower(username) = :value OR lower(email) = :value', { value: login.downcase }]
      )
    elsif conditions.key?(:username) || conditions.key?(:email)
      conditions[:email]&.downcase!
      find_by(conditions.to_h)
    end
  end

  def validate_username
    errors.add(:username, :invalid) if User.where(email: username).exists?
  end
end
