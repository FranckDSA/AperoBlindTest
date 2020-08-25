class Player < ApplicationRecord
  belongs_to :game
  has_many :answers
  validates :user_name, :game_id, presence: true
end
