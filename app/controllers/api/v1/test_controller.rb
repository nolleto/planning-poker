class Api::V1::TestController < ApiController
  def index
    render json: { status: 'Hello world' }
  end
end
