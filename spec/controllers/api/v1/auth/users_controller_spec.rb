require 'rails_helper'

RSpec.describe Api::V1::Auth::UsersController, type: :controller do
  describe '#create' do
    let!(:db_user) { create(:user) }

    context 'When signing in with a valid user' do
      let(:result) {
        {
          auth_token: 'token',
          user: {
            username: 'user'
          }
        }
      }

      before do
        allow(JsonWebToken).to receive(:encode).and_return('token')
        post :create, params: { login: 'user', password: 123456 }
      end

      it 'has a 200 status code' do
        expect(response.status).to eq(200)
      end

      it 'returns json with payload' do
        expect(response.body).to eq result.to_json
      end
    end

    context 'When signing in with a invalid password' do
      let(:result) {
        {
          errors: ['Invalid Username/Password']
        }
      }

      before do
        post :create, params: { login: 'user', password: 'invalid_password' }
      end

      it 'has a 401 status code' do
        expect(response.status).to eq(401)
      end

      it 'returns json with errors' do
        expect(response.body).to eq result.to_json
      end
    end

    context 'When signing in with a nonexistent user' do
      let(:result) {
        {
          errors: ['Invalid Username/Password']
        }
      }

      before do
        post :create, params: { login: 'invalid_user', password: 'invalid_password' }
      end

      it 'has a 401 status code' do
        expect(response.status).to eq(401)
      end

      it 'returns json with errors' do
        expect(response.body).to eq result.to_json
      end
    end
  end

  describe '#sign_up' do
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

        post :sign_up
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

        post :sign_up
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

        post :sign_up
      end

      it 'has a 422 status code' do
        expect(response.status).to eq(422)
      end

      it 'returns json with errors' do
        expect(response.body).to eq result.to_json
      end
    end
  end

  describe '#sign_out_user' do
    context 'When user is signed' do
      before do
        allow(controller).to receive(:authenticate_request!).and_return(build_stubbed(:user))
        post :sign_out_user
      end

      it 'has a 204 status code' do
        expect(response.status).to eq(204)
      end
    end

    context 'When user is not signed' do
      let(:result) {
        {
          errors: ['Not Authenticated']
        }
      }

      before do
        post :sign_out_user
      end

      it 'has a 401 status code' do
        expect(response.status).to eq(401)
      end

      it 'returns json with error' do
        expect(response.body).to eq result.to_json
      end
    end
  end
end
