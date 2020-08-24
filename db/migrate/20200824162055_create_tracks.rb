class CreateTracks < ActiveRecord::Migration[6.0]
  def change
    create_table :tracks do |t|
      t.string :title
      t.string :artist
      t.integer :duration_ms
      t.references :game, null: false, foreign_key: true
      t.string :spotify_id

      t.timestamps
    end
  end
end
