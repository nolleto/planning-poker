Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :test

      namespace :auth do
        resources :users, only: [:create]

        resources :sessions, only: [:create, :destroy] do
          collection do
            delete '', to: 'sessions#destroy'
          end
        end
      end
    end
  end
end
