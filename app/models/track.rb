class Track < ApplicationRecord
  belongs_to :game
  has_many :answers, :games
end
