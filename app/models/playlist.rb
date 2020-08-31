class Playlist < ApplicationRecord
  has_many :games, dependent: :destroy
  belongs_to :user, optional: true
  validates :name, :spotify_id, presence: true
end
