class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

  def current_player
    Player.find(session[:player_id])
  end

  def after_sign_in_path_for(resource)
    new_game_path
  end

  def broadcast
    conditions_user = render_to_string(partial: 'games/conditions_user')
    conditions_player = render_to_string(partial: 'games/conditions_player')
    sorted = @game.players.sort_by { |obj| obj.score}.reverse.each_with_index.map{ |player, index| {id: player.id, score: player.score, rank: index + 1 }}
    GameChannel.broadcast_to(@game, {
      user: conditions_user,
      player: conditions_player,
      ranks: sorted
    })
  end

  def default_url_options
  { host: ENV["DOMAIN"] || "localhost:3000" }
  end
end
