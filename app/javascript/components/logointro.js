
const initIntroLogo = () => {
  const logo = document.querySelector('#logo-and-name');
  const enter = document.querySelector('#enter');
  if (logo) {
    logo.classList.add("animate__pulse");
    // logo.classList.add("animate__fadeOut");
    // enter.classList.remove("hidden");
    // enter.classList.add("animate__fadeIn");
  };
};


  const initLogoFadeOut = () => {
    const logo = document.querySelector('#logo-and-name');
    logo.classList.add("animate__fadeOut");
  };


  const initEnterFadeIn = () => {
    const enter = document.querySelector('#enter');
    enter.classList.remove("hidden");
    enter.classList.add("animate__fadeIn");
  };



export { initIntroLogo };
export { initLogoFadeOut };
export { initEnterFadeIn };
