require 'faker'

p "Destroying tables..."

Playlist.destroy_all
Game.destroy_all
# User.destroy_all

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
  Playlist.create!(
    name: playlist.name,
    image: playlist.images.first["url"],
    spotify_id: playlist.id
    )
end

p "Playlists created"

# user = User.create!(
#   email: "nicolas.kiger@gmail.com",
#   password: "123456",
#   user_name: "Nico",
#   uid: "9blz2ine1b7ffzwhkpdjy75za")

game = Game.create!(
  user_id: User.first.id,
  state: "pending",
  max_score: 20,
  playlist_id: Playlist.first.id,
  game_pin: (('0'..'9').to_a + ('a'..'z').to_a).sample(4).join
  )

p "Game created"

3.times do
  player = Player.create!(
    user_name: Faker::Superhero.name,
    game_id: Game.first.id,
    score: 0
  )
end
