class AnswersController < ApplicationController
skip_before_action :authenticate_user!, only: [:new, :create]

  def index
    @answers = Answer.all
  end

  def new
    @answer = Answer.new
  end

  def create
    @answer = Answer.new
    @game = Game.find(params[:game_id])
    @game.state = "buzz"
    @game.save
    @answer.player_id = current_player.id
    @answer.track_id = @game.current_track_id
    @answer.save!
    @current_player = current_player if current_user == nil || current_user != @game.user
    redirect_to game_path(@game)
    broadcast
  end

  def edit

  end

  def update
    @answer = @game.answers.last
    @answer.update(answer_params)
    broadcast
  end

  private

  def answer_params
    params.require(:answer).permit(:correct_artist, :correct_title)
  end
end
