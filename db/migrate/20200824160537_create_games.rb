class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :max_score
      t.string :state
      t.references :playlist, null: false, foreign_key: true
      t.integer :current_track_id

      t.timestamps
    end
  end
end
