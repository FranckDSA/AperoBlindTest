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
    @game = Game.new(game_params_creation)
    @game.user = current_user
    # states = ["pending","paused","playing","ended"]
    @game.state = "pending"
    @game.game_pin = (('0'..'9').to_a + ('a'..'z').to_a).sample(4).join

    # game_playlist_spotify_id = Playlist.find(@game.playlist_id).spotify_id
    # game_playlist = RSpotify::Playlist.find_by_id(game_playlist_spotify_id)

    # game_playlist.tracks.each do |track|
    #   Track.create!(
    #     title: track.name,
    #     artist: track.artists.first.name,
    #     duration_ms: track.duration_ms,
    #     spotify_id: track.id,
    #     image: track.album.images.first["url"],
    #     game_id: game.id
    #     )
    #   end

    # @game.current_track = Track.first
    @game.save!
    redirect_to game_path(@game)
  end

  def edit
  end

  def update
    @game.update(game_params_update)
    GameChannel.broadcast_to(@game, "")
  end

  private

  def game_params_update
    params.require(:game).permit(:max_score, :playlist_id, :current_track_id)
  end

  def game_params_creation
    params.require(:game).permit(:max_score, :playlist_id)
  end
  def set_game
    @game = Game.find(params[:id])
  end
end
