class AddColumnSearchedToPlaylists < ActiveRecord::Migration[6.0]
  def change
    add_column :playlists, :searched, :boolean
  end
end
