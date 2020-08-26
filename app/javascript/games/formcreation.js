const initPlaylistChoice = () => {
$(document).ready(function(){
  $(".category-choice").click(function(){
    $(this).toggleClass("active");
  });
});
}

export { initPlaylistChoice };
