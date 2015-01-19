Rails.application.routes.draw do

  resources :statuses

  root 'pages#home'
end
