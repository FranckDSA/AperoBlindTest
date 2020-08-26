class AddImageToTracks < ActiveRecord::Migration[6.0]
  def change
    add_column :tracks, :image, :string
  end
end
