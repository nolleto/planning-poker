class Api::V1::TestController < ApiController
  before_action :authenticate_request!

  def index
    render json: { status: 'Hello world' }
  end
end
