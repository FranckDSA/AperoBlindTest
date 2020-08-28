const initPlaylistChoice = () => {
  // $(document).ready(function(){
  //   $(".category-choice").click(function(){
  //     $(this).toggleClass("active");
  //   });
  // });
  const clickPlaylists = document.querySelectorAll(".category-choice")
  clickPlaylists.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      btn.previousElementSibling.click();
      const clickPlaylistsActive = document.querySelectorAll(".category-choice.active")
      clickPlaylistsActive.forEach((btnActive) => {
        btnActive.classList.remove("active")
      })
      btn.classList.toggle("active");
    })
  })
}


export { initPlaylistChoice };
