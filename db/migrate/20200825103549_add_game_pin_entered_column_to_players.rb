class AddGamePinEnteredColumnToPlayers < ActiveRecord::Migration[6.0]
  def change
    add_column :players, :game_pin_entered, :string
  end
end
