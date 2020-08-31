const initScoresModal= () => {
  const playing = document.querySelector('.playing');
  const modal = document.querySelector('#modal-scores');
  const click = document.querySelector('#click-modal')
  if (playing) {
    click.addEventListener('click', () => {
      playing.classList.add("hidden");
      modal.classList.remove("hidden");
      // modal.classList.add("visible");
    });
  };
  else {
    click.addEventListener('click', () => {
      modal.classList.add("hidden");
      playing.classList.remove("hidden");
    })
  }
};

export { initScoresModal };
