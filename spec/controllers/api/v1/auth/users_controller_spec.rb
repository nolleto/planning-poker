require 'rails_helper'

RSpec.describe Api::V1::Auth::UsersController, type: :controller do
  describe '#create' do
    context 'When has no errors' do
      let(:result) {
        {
          auth_token: 'token',
          user: {
            username: 'user'
          }
        }
      }

      before do
        allow(AuthService).to receive(:sign_up!).and_return(create(:user))
        allow(JsonWebToken).to receive(:encode).and_return('token')

        post :create
      end

      it 'has a 200 status code' do
        expect(response.status).to eq(200)
      end

      it 'returns json with user' do
        expect(response.body).to eq result.to_json
      end
    end

    context 'When AuthService throws ActiveRecord::RecordInvalid' do
      let(:result) {
        {
          errors: {
            email: [ "can't be blank" ],
            password: [ "can't be blank" ],
            username: [ "can't be blank" ]
          }
        }
      }

      before do
        invalid_user = User.create()
        allow(AuthService).to receive(:sign_up!).and_raise(ActiveRecord::RecordInvalid.new(invalid_user))

        post :create
      end

      it 'has a 422 status code' do
        expect(response.status).to eq(422)
      end

      it 'returns json with errors' do
        expect(response.body).to eq result.to_json
      end
    end

    context 'When AuthService throws StandardError' do
      let(:result) {
        {
          errors: ['Unknown error']
        }
      }

      before do
        allow(AuthService).to receive(:sign_up!).and_raise

        post :create
      end

      it 'has a 422 status code' do
        expect(response.status).to eq(422)
      end

      it 'returns json with errors' do
        expect(response.body).to eq result.to_json
      end
    end
  end
end
