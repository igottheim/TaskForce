Rails.application.routes.draw do
  resources :messages
  mount ActionCable.server => "/cable"
  
  resources :users
  
  resources "/rooms", to: "rooms#index"

  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end
