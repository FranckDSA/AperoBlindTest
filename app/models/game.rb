class Game < ApplicationRecord
  has_many :players, dependent: :destroy
  has_many :tracks, dependent: :destroy
  belongs_to :user
  belongs_to :playlist
  belongs_to :current_track, class_name: 'Track'
  validates :user_id, :max_score, :state, :playlist_id, presence: true
  has_many :answers, through: :players

  def change_state
    #méthode pour modifier "state" d'une instance de game
  end
end
