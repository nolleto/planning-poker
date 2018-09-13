Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :test

      namespace :auth do
        resources :users do

          collection do
            post 'sign_up', to: 'users#sign_up'
          end
        end
      end
    end
  end
end
