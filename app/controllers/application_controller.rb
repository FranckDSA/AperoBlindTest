class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  def current_player
    Player.find(session[:player_id])
  end
end
