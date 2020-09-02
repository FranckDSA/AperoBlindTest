class GamesController < ApplicationController
  before_action :set_game, only: [:show, :update, :destroy]
  skip_before_action :authenticate_user!, only: [:show]

  def index
    @games = Game.all
  end

  def show
    @answer = Answer.new
    @current_player = current_player if current_user == nil || current_user != @game.user
  end

  def new
    @game = Game.new
    @user_private_playlists = Playlist.where(user_id: current_user.id, searched: nil)
    @public_spotify_playlists = Playlist.where(user_id: nil)

    @searched_spotify_playlists = []
    if params[:query].present?
      @spotify_playlists = RSpotify::Playlist.search(params[:query], limit: 6)
      Playlist.where(user_id: current_user.id, searched: true).destroy_all
      @spotify_playlists.each do |playlist|
        pl = Playlist.create!(
              name: playlist.name,
              image: playlist.images.first["url"],
              spotify_id: playlist.id,
              user_id: current_user.id,
              searched: true,
            )
        @searched_spotify_playlists << pl
      end

    end
  end

  def create
    @game = Game.new(game_params_creation)
    @game.user = current_user
    # states = ["pending","paused","playing","ended"]
    @game.state = "pending"
    @game.game_pin = (('0'..'9').to_a + ('A'..'Z').to_a).sample(4).join
    @game.save!

    game_playlist_spotify_id = @game.playlist.spotify_id
    game_playlist = RSpotify::Playlist.find_by_id(game_playlist_spotify_id)

    game_playlist.tracks.each do |track|
      Track.create!(
        title: track.name,
        artist: track.artists.first.name,
        duration_ms: track.duration_ms,
        spotify_id: track.id,
        image: track.album.images.first["url"],
        game_id: @game.id
      )
    end

    @game.current_track = @game.tracks.first
    @game.save!

    redirect_to game_path(@game)
  end

  def update
    @game.update(game_params_update)
    @answer = Answer.new
    broadcast
  end

  def destroy
    @game.destroy
  end

  private

  def game_params_update
    params.require(:game).permit(:max_score, :playlist_id, :current_track_id, :state)
  end

  def game_params_creation
    params.require(:game).permit(:max_score, :playlist_id)
  end
  def set_game
    @game = Game.find(params[:id])
  end
end
