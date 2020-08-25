class Playlist < ApplicationRecord
  has_many :games
  validates :name, :spotify_id, presence: true
end
