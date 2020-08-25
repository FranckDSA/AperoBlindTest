Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :games, only: [:new, :index, :create, :show, :update, :edit] do
    resources :playlists, only: [:index, :show]
    # Virer l'index après tests
    resources :answers, only: [:index, :new, :create]
  end
  resources :answers, only: [:update, :edit]
    # Index ajouté par rapport au schema de DB
  resources :players, only: [:index, :new, :create]
end
