class Playlist < ApplicationRecord
  has_many :games, dependent: :destroy
  validates :name, :spotify_id, presence: true
end
