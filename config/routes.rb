Rails.application.routes.draw do
  get '/' => 'people#index'
  get '/people' => 'people#index'
end
