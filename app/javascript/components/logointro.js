
const initIntroLogo = () => {
  const logo = document.querySelector('#logo-and-name');
  if (!logo) {
    return
  }
  const enter = document.querySelector('#enter');
  logo.classList.add("animate__heartBeat");
};

  const initLogoFadeOut = () => {
    const logo = document.querySelector('#logo-and-name');
    if (!logo) {
      return
    }
    logo.classList.add("animate__fadeOut");
  };

  const initEnterFadeIn = () => {
    const enter = document.querySelector('#enter');
    if (!enter) {
      return
    }
    enter.classList.remove("hidden");
    enter.classList.add("animate__fadeIn");
  };

  const initPendingPlayers = () => {
    const name = document.querySelector('#pendingplayers');
    if (!name) {
      return
    }
    name.classList.add("animate__bounceInRight");
  };

  const initEndScores = () => {
    const score = document.querySelector('#coolscores');
    if (!score) {
      return
    }
    score.classList.add("animate__fadeInDownBig");
  };


export { initIntroLogo };
export { initLogoFadeOut };
export { initEnterFadeIn };
export { initPendingPlayers };
export { initEndScores };
