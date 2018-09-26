require 'rails_helper'

RSpec.describe Api::V1::TestController, type: :controller do
  describe '#index' do
    context 'When is authenticated' do
      let(:result) { { status: 'Hello world' } }

      before do
        allow(controller).to receive(:authenticate_request!).and_return(build_stubbed(:user))
      end

      describe 'GET index' do
        it 'has a 200 status code' do
          get :index
          expect(response.status).to eq(200)
        end

        it 'returns json with "Hello world"' do
          get :index

          expect(response.body).to eq result.to_json
        end
      end
    end

    context 'When is not authenticated' do
      describe 'GET index' do
        it 'has a 401 status code' do
          get :index
          expect(response.status).to eq(401)
        end
      end
    end
  end
end
