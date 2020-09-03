const timerNextSong = (tps) => {
  const timerElement = document.querySelector("#timer-next-song");
    if (!timerElement) {
      return;
    }
    if (tps > 0) {
      var heure = Math.floor(tps/3600);
      if(heure >= 24) {
        var jour = Math.floor(heure/24);
        var moins = 86400*jour;
        var heure = heure-(24*jour);
      }
      else {
        var jour = 0;
        var moins = 0;
      }
      moins = moins+3600*heure;
      var minutes = Math.floor((tps-moins)/60);
      moins = moins + 60*minutes;
      var secondes = tps-moins;
      minutes = ((minutes < 10) ? "0" : "") + minutes;
      secondes = ((secondes < 10) ? "0" : "") + secondes;
      document.getElementById("timer-next-song").innerHTML = +secondes;
      var restant = tps-1;
      setTimeout(() => {timerNextSong(restant)}, 1000);
    }
    else {
      document.getElementById("timer-next-song").innerHTML = 'GO!';

    }
};
export { timerNextSong };
