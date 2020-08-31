// const initScoresModal= () => {
//   // const playing = document.querySelector('.playing');
//   // const modal = document.querySelector('#modal-scores');
//   // const click = document.querySelector('#click-modal');
//   // click.addEventListener('click', () => {
//   //   if (playing) {
//   //     playing.classList.add("hidden");
//   //     modal.classList.remove("hidden");
//   //   } else {
//   //     modal.classList.add("hidden");
//   //     playing.classList.remove("hidden");
//   //   }
//   // });


//   const playing = document.querySelector('.playing');
//   const modal = document.querySelector('#modal-scores');
//   const click = document.querySelector('#click-modal');
//   if (playing) {
//     click.addEventListener('click', () => {
//       playing.classList.add("hidden");
//       modal.classList.remove("hidden");
//     });
//   } else {
//     click.addEventListener('click', () => {
//       modal.classList.add("hidden");
//       playlist.classList.remove("hidden");
//     });
//   }
// };

const initScoresModal = () => {
  const modal = document.querySelector('#modal-scores');
  const playing = document.querySelector('.playing');
  const btn = document.querySelector('#click-modal');
  const span = document.getElementsByClassName("close")[0];
  btn.onclick = function() {
    modal.classList.remove("hidden");
    playing.classList.add("hidden");
    btn.classList.add("hidden");
  }
  span.onclick = function() {
    modal.classList.add("hidden");
    playing.classList.remove("hidden");
    btn.classList.remove("hidden");
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.classList.add("hidden");
    }
  }
}

export { initScoresModal };
