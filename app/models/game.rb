class Game < ApplicationRecord
  has_many :players
  has_many :tracks
  belongs_to :user
  belongs_to :playlist
  validates :user_id, :max_score, :state, :playlist_id, presence: true
  has_many :answers, through: :players

  def change_state
    #méthode pour modifier "state" d'une instance de game
  end
end
