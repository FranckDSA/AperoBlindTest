class Track < ApplicationRecord
  belongs_to :game
  has_many :answers, :games
  validates :title, :artist, :duration_ms, :spotify_id, presence: true
end
