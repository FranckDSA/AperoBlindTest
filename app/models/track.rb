class Track < ApplicationRecord
  belongs_to :game
  has_many :answers
  has_many :games
  validates :title, :artist, :duration_ms, :spotify_id, presence: true
end
