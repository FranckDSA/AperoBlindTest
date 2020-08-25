class Game < ApplicationRecord
  has_many :players, :tracks
  belongs_to :user, :playlist
  validates :user_id, :max_score, :state, :playlist_id, presence: true


  def change_state
    #méthode pour modifier "state" d'une instance de game
  end
end
