class GamesController < ApplicationController
  before_action :set_game, only: [:show, :edit, :update]
  def index
    @games = Game.all
  end

  def show
    GameChannel.broadcast_to(@game, "test")
  end

  def new
    @game = Game.new
  end

  def create
    @game = Game.new(game_params)
    @game.user = current_user
    # states = ["pending","paused","playing","ended"]
    @game.state = "pending"
    @game.game_pin = (('0'..'9').to_a + ('a'..'z').to_a).sample(4).join
    @game.save!
    redirect_to game_path(@game)
  end

  def edit
  end

  def update
    GameChannel.broadcast_to(@game, "")
  end

  private

  def game_params
    params.require(:game).permit(:max_score, :playlist_id)
  end

  def set_game
    @game = Game.find(params[:id])
  end
end
