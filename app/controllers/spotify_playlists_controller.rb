class SpotifyPlaylistsController < ApplicationController
  def index
    @spotify_playlists = RSpotify::Playlist.search(params[:query], limit: 3)
  end
end
