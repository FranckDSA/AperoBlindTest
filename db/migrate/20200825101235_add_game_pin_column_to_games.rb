class AddGamePinColumnToGames < ActiveRecord::Migration[6.0]
  def change
    add_column :games, :game_pin, :string
  end
end
