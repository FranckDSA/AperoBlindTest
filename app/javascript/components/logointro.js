const initIntroLogo = () => {
  const logo = document.querySelector('#logo-and-name');
  const enter = document.querySelector('#enter');
  if (logo) {
    logo.classList.add("hidden");
    enter.classList.remove("hidden");
    button.classList.add("visible");
  };
};

export { initIntroLogo };
