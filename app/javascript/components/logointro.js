
const initIntroLogo = () => {
  const logo = document.querySelector('#logo-and-name');
  if (!logo) {
    return
  }
  const enter = document.querySelector('#enter');
  logo.classList.add("animate__pulse");
    // logo.classList.add("animate__fadeOut");
    // enter.classList.remove("hidden");
    // enter.classList.add("animate__fadeIn");
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

export { initIntroLogo };
export { initLogoFadeOut };
export { initEnterFadeIn };
