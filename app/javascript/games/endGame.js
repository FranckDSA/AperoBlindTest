// const endGame = () => {
//   const btnEnd = document.querySelector('#end');
//   if (!btnEnd) {
//     return;
//   }
//   console.log("ok")
//   btnEnd.addEventListener('click', () => {
//     const gameId = btnEnd.dataset.gameId;
//     fetch(`games/${gameId}`, {
//       method: "PATCH",
//       body: JSON.stringify({game: {state: "ended" }}),
//       headers: {
//         'X-Requested-With': 'XMLHttpRequest',
//         'X-CSRF-Token': csrfToken,
//         'Content-Type': 'application/json',
//       },
//       credentials: 'same-origin'
//     })
//   })
// };

// export { endGame };
