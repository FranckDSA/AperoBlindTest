const initIntroLogo = () => {
  const logo = document.querySelector('#logo-and-name');
  const enter = document.querySelector('#enter');
  if (logo && enter) {
    logo.addEventListener('click', () => {
    logo.classList.add("hidden");
    enter.classList.remove("hidden");
    enter.classList.add("visible");
    });
  };
};

export { initIntroLogo };
