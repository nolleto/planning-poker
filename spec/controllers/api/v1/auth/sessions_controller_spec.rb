require 'rails_helper'

RSpec.describe Api::V1::Auth::SessionsController, type: :controller do
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

  describe '#destroy' do
    context 'When user is signed' do
      before do
        allow(controller).to receive(:authenticate_request!).and_return(build_stubbed(:user))
        delete :destroy
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
        delete :destroy
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
