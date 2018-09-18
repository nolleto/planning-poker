require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'Validations' do
    it { is_expected.to validate_presence_of(:username) }
    it { is_expected.to validate_uniqueness_of(:username).case_insensitive }
  end

  describe '#login' do
    context 'When has username' do
      let(:user) { build(:user, email: nil) }

      it 'returns username' do
        expect(user.login).to eq 'user'
      end
    end

    context 'When has email' do
      let(:user) { build(:user, username: nil) }

      it 'returns email' do
        expect(user.login).to eq 'user@example.com'
      end
    end

    context 'When has username and email' do
      let(:user) { build(:user) }

      it 'returns username' do
        expect(user.login).to eq 'user'
      end
    end
  end

  describe '#validate_username' do
    context 'When already exist a user with the same username' do
      let(:user) { build(:user) }

      before do
        create(:user)
        user.validate_username
      end

      it 'returns username' do
        expect(user.validate).to eq false
      end
    end

    context 'When does not exist a user with the same username' do
      let(:user) { build(:user) }

      before do
        user.validate_username
      end

      it 'returns username' do
        expect(user.validate).to eq true
      end
    end
  end

  describe '#find_for_database_authentication' do
    let!(:db_user) { create(:user) }

    context 'When is finding a user by username' do
      context 'with invalid username' do
        it 'returns nil' do
          user = User.find_for_database_authentication(login: 'invalid_username')

          expect(user).to eq nil
        end
      end

      context 'with valid username' do
        it 'returns user' do
          user = User.find_for_database_authentication(login: 'user')

          expect(user).to eq db_user
        end
      end
    end

    context 'When is finding a user by email' do
      context 'with invalid email' do
        it 'returns nil' do
          user = User.find_for_database_authentication(login: 'invalid_email@example.com')

          expect(user).to eq nil
        end
      end

      context 'with a valid email in uppercase' do
        context 'with valid email' do
          it 'returns user' do
            user = User.find_for_database_authentication(login: 'USER@EXAMPLE.COM')

            expect(user).to eq db_user
          end
        end
      end

      context 'with a valid email in downcase' do
        it 'returns user' do
          user = User.find_for_database_authentication(login: 'user@example.com')

          expect(user).to eq db_user
        end
      end
    end
  end
end
