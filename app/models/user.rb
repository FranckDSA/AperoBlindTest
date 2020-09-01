class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :games
  has_many :playlists, dependent: :destroy

  devise :omniauthable, :omniauth_providers => [:spotify]

  def self.from_omniauth(auth)
    user = where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.user_name = auth.info.name
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.uid = auth.uid
    end
    user.token = auth.credentials.token
    if auth.info.image
      user.avatar = auth.info.image
    end
    user.save!

    user.playlists.destroy_all

    me = RSpotify::User.find(user.uid)
    me.playlists.first(3).each do |playlist|
      Playlist.create!(
        name: playlist.name,
        image: playlist.images.first["url"],
        spotify_id: playlist.id,
        user_id: user.id
      )
    end
    user
  end

  validates :user_name, presence: true
  has_one_attached :photo
end
