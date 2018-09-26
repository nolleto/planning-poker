require 'rails_helper'

RSpec.describe AuthService, type: :model do
  describe '#sign_up!' do
    context 'When passing the right params' do
      before (:all) do
        AuthService.sign_up!({
          username: 'admin',
          email: 'admin@example.com',
          password: 123456
        })
      end

      it 'adds a new user in database' do
        expect(User.count).to eq 1
      end
    end

    context 'When passing the wrong params' do
      let(:missing_params) {
        {
          username: 'admin',
          email: 'admin@example.com'
        }
      }

      it 'throws' do
        expect { AuthService.sign_up!(missing_params) }.to raise_error(ActiveRecord::RecordInvalid)
      end
    end
  end
end
