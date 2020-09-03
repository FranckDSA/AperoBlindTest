const waitingForNextSong = () => {
  const pageWaitingForNextSong = document.querySelector("#waiting-for-next-song");
  if (!pageWaitingForNextSong) {
    return;
  }

  const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
  const gameId = pageWaitingForNextSong.dataset.gameId;
  setTimeout(
    function() {
      fetch(`/games/${gameId}`, {
        method: "PATCH",
        body: JSON.stringify({game: {state: "playing" }}),
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-Token': csrfToken,
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin'
      })
    }, 8000);
};

export { waitingForNextSong };
