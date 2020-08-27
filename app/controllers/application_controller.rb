class ApplicationController < ActionController::Base
 before_action :authenticate_user!

  def current_player
    Player.find(session[:player_id])
  end

  def after_sign_in_path_for(resource)
    new_game_path
  end

  def broadcast
    conditions_user = render_to_string(partial: 'conditions_user')
    conditions_player = render_to_string(partial: 'conditions_player')
    GameChannel.broadcast_to(@game, {
      user: conditions_user,
      player: conditions_player
    })
  end
end
