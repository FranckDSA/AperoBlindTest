class ApplicationController < ActionController::Base
 before_action :authenticate_user!

  def current_player
    Player.find(session[:player_id])
  end

  def after_sign_in_path_for(resource)
    new_game_path
  end
end
