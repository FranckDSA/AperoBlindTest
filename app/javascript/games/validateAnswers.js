const validateAnswers = () => {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
  const clickValidation = document.querySelector("#validation");
    clickValidation.addEventListener('click', () => {
      const playerId = clickValidation.dataset.playerId;
      fetch(`/players/${playerId}`, {
      method: "PATCH",
      body: JSON.stringify({player: {score: 1 }}),
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': csrfToken,
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin'
    })
    })
};
export { validateAnswers };
