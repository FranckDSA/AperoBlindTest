require 'faker'

p "Destroying tables..."

Playlist.destroy_all
Game.destroy_all

p "Tables destroyed!"

playlist_id_cuba = "1KGdyl3UgwzO6wG1Ivksnp"
playlist_id_diner = "37i9dQZF1DX915ogFalrko"
playlist_id_hits = "37i9dQZF1DXdPec7aLTmlC"
playlist_id_annees2000 = "37i9dQZF1DXacPj7eARo6k"
playlist_id_bofilm = "37i9dQZF1DX7g9DBqnMitx"
playlist_id_dance = "37i9dQZF1DWUwJ0RFwrgQP"

playlists = []
playlists << playlist_id_cuba
playlists << playlist_id_diner
playlists << playlist_id_hits
playlists << playlist_id_annees2000
playlists << playlist_id_bofilm
playlists << playlist_id_dance

playlists.each do |id|
  playlist = RSpotify::Playlist.find_by_id(id)
  Playlist.create(
    name: playlist.name,
    image: playlist.images.first["url"],
    spotify_id: playlist.id
    )
end

p "Playlists created"

