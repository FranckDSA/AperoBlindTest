class Game < ApplicationRecord
  has_many :players, :tracks
  belongs_to :user, :playlist
end
