const resumeGame = () => {
  const buzzUserPage = document.querySelector("#buzz-user");
    if (!buzzUserPage) {
      return;
    }
    const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
    const buttonResume = document.querySelector("#resume");
      buttonResume.addEventListener('click', () => {
        const gameId = buttonResume.dataset.gameId;
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
    })
};
export { resumeGame };
