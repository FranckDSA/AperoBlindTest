class AnswersController < ApplicationController

  def index
    @answers = Answer.all
  end

  def new
    # @answer = Answer.new
  end

  def create
    @answer = Answer.new
    @game = Game.find(params[:game_id])
    @game.state = "paused"
    @game.save
    @answer.player_id = current_player.id
    @answer.track_id = @game.current_track_id

    @answer.save!
  end

  def edit

  end

  def update
    raise
    #On selectionne la dernière réponse et on bloque les autres players
    @answer = @game.answers.last
    @answer.update(answer_params)
  end

  private

  def answer_params
    params.require(:answer).permit(:correct_artist, :correct_title)
  end
end
