const initIntroLogo = () => {
  const logo = document.querySelector('#logo-and-name');
  if (!logo) {
    return
  }
  // const enter = document.querySelector('#enter');
  logo.classList.add("animate__pulse");
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
    const names = document.querySelectorAll('.pendingplayers');
    if (!names) {
      return
    }
    names.forEach((name) => {
      name.classList.remove("animate__bounceInRight");
    })
    const lastName = names[names.length-1];
    if (!lastName) {
      return
    }
    console.log(lastName)
    lastName.classList.add("animate__bounceInRight");
  };

  const initEndScores = () => {
    const score = document.querySelector('#coolscores');
    if (!score) {
      return
    }
    score.classList.add("animate__fadeInDownBig");
  };


  const initPulseBuzzer = () => {
    const buzz = document.querySelector('.display-gif');
    if (!buzz) {
      return
    }
    buzz.classList.add("animate__animated","animate__pulse");
  };

  const initPulseTimer = () => {
    const timer = document.querySelector('.display-gif-timer');
    if (!timer) {
      return
    }
    timer.classList.add("animate__animated","animate__pulse");
  };

  const initLienFadeOut = () => {
    const lien = document.querySelector('#lienform');
    if (!lien) {
      return
    }
    lien.classList.add("animate__fadeOut");
  };

  const initFormFadeIn = () => {
    const form = document.querySelector('#downhome');
    const master = document.querySelector(".top")
    if (!form) {
      return
    }
    master.classList.add("animate__fadeOut")
    form.classList.remove("hidden");
    form.classList.add("animate__fadeIn");
  };

  const activeForm = () => {
    const lienclick = document.querySelector('#lienform');
    if (!lienclick) {
      return
    }
    lienclick.addEventListener("click", (event) => {
      initLienFadeOut();
      initFormFadeIn();
    })
  };

export { initIntroLogo };
export { initLogoFadeOut };
export { initEnterFadeIn };
export { initPendingPlayers };
export { initEndScores };
export { initPulseBuzzer };
export { activeForm };
export { initPulseTimer };
