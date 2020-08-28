/*Fonction Play avec uri de chanson et l'instance du player Spotify*/
const play = ({
  spotify_uri,
  playerInstance: {
    _options: {
      getOAuthToken,
      id
    }
  }
}) => {
  getOAuthToken(access_token => {
    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
      method: 'PUT',
      body: JSON.stringify({ uris: [spotify_uri] }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
      },
    });
  });
};

/*Fonction Player Spotify*/
const initPlayer = () => {
  const playerElement = document.querySelector("#player");
  if (!playerElement) {
    return;
  }
  const tokenCurrentUser = playerElement.dataset.tokenCurrentUser;
  const currentTrackSpotifyId = playerElement.dataset.currentTrackSpotifyId;
  const gameId = playerElement.dataset.gameId;
  const nextTrackId = playerElement.dataset.nextTrackId;
  const buzzUser = document.querySelector("#buzz-user");

  const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

  /*Button play / pause*/
  const button = document.querySelector('#play');
  if (button) {
    button.addEventListener('click', () => {
      if (button.innerHTML == "Pause") {
        button.innerHTML = "Play";
        button.classList.remove("btn-light");
        button.classList.add("btn-success");
        window.spotifyPlayer.pause().then(() => {
          console.log('Paused!');
        });
      } else {
        button.innerHTML = "Pause";
        button.classList.remove("btn-success");
        button.classList.add("btn-light");
        window.spotifyPlayer.resume().then(() => {
          console.log('Resumed!');
        });
      };
    });
  }

  /*Button Next track*/
  const button_nexttrack = document.querySelector('#nexttrack');
  if (button_nexttrack) {
    button_nexttrack.addEventListener('click', () => {
      fetch(`/games/${gameId}`, {
        method: "PATCH",
        body: JSON.stringify({game: {current_track_id: nextTrackId }}),
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-Token': csrfToken,
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin'
      })
      window.spotifyPlayer.nextTrack().then(() => {
        console.log('Skipped to next track!');
      });
    });
  }

  /*Button Fin du jeu*/
  const button_endgame = document.querySelector('#end');
  if (button_endgame) {
    button_endgame.addEventListener('click', () => {
      window.spotifyPlayer.disconnect()
    });
  }

  /*Button Buzzer qui arrête la track en cours*/
  if (!document.querySelector("#spotify-js")) {
    const js = document.createElement("script");
    js.id = "spotify-js"
    js.src ="https://sdk.scdn.co/spotify-player.js";
    document.head.appendChild(js);
  }
  console.log("PlayerS", window.spotifyPlayer)
  if (window.spotifyPlayer) {
    console.log("BuzzUser",buzzUser);
    if (buzzUser) {
       window.spotifyPlayer.pause().then(() => {
        console.log('Paused!');
      });
    } else {
      play({
        playerInstance: window.spotifyPlayer,
        spotify_uri: `spotify:track:${currentTrackSpotifyId}`,
      });
    };
    return;
  };

  /*Lancement du player Spotify*/
  window.onSpotifyWebPlaybackSDKReady = () => {
    window.spotifyPlayer = new Spotify.Player({
      name: 'AperoBlindTests',
      getOAuthToken: cb => { cb(tokenCurrentUser);}
    });

    // Error handling
    window.spotifyPlayer.addListener('initialization_error', ({ message }) => { console.error(message); });
    window.spotifyPlayer.addListener('authentication_error', ({ message }) => { console.error(message); });
    window.spotifyPlayer.addListener('account_error', ({ message }) => { console.error(message); });
    window.spotifyPlayer.addListener('playback_error', ({ message }) => { console.error(message); });

    // Playback status updates
    window.spotifyPlayer.addListener('player_state_changed', state => { console.log(state); });

    // Ready
    window.spotifyPlayer.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
      play({
        playerInstance: window.spotifyPlayer,
        spotify_uri: `spotify:track:${currentTrackSpotifyId}`,
      });
    });

    // Not Ready
    window.spotifyPlayer.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });

    // Connect to the player!
    window.spotifyPlayer.connect();
  };
};

export { initPlayer };

