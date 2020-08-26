class Player < ApplicationRecord
  belongs_to :game
  has_one_attached :photo
  has_many :answers, dependent: :destroy
  validates :user_name, :game_id, presence: true
end
