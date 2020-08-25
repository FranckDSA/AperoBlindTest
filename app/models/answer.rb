class Answer < ApplicationRecord
  belongs_to :player
  belongs_to :track
  validates :player_id, :track_id, presence: true
end
