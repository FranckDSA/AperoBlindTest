class Game < ApplicationRecord
  has_many :players, :tracks
  belongs_to :user, :playlist
  validates :user_id, :max_score, :state, :playlist_id, presence: true
end
