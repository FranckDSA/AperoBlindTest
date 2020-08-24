class CreateAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :answers do |t|
      t.references :player, null: false, foreign_key: true
      t.references :track, null: false, foreign_key: true
      t.boolean :correct_artist
      t.boolean :correct_title

      t.timestamps
    end
  end
end
