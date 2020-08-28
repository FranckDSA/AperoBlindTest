class PlayersController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    @players = Player.all
  end

  def new
  end

  def create
    @player = Player.new(params_player)
    if Game.where(game_pin: params[:player][:game_pin_entered], state: "pending").exists?
      @game = Game.find_by(game_pin: params[:player][:game_pin_entered])
      @player.game_id = @game.id
      @player.score = 0
      @player.save
      session[:player_id] = @player.id
      redirect_to game_path(@game)
      broadcast
    else
      render "pages/home"
    end
  end

  def update
    @player = Player.find(params[:id])
    @player.score += 1
    @player.save
    # @player.update(params_player_update)
    @game = @player.game
    @game.state = "playing"
    @game.save
    @answer = Answer.new
    broadcast
  end

  private

  def params_player
      params.require(:player).permit(:user_name)
  end

  def params_player_update
    params.require(:player).permit(:user_name, :score)
  end

end
