class CreatePlaylists < ActiveRecord::Migration[6.0]
  def change
    create_table :playlists do |t|
      t.string :name
      t.string :image
      t.string :spotify_id

      t.timestamps
    end
  end
end
