// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';
// import { initUpdateGameToPlaying } from '../games/launchgame';
import { initPlaylistChoice } from '../games/formcreation';
import { initGameCable } from '../channels/gamechannel.js';

import { initCounterTenSeconds } from '../components/counter.js';
// import for material Design
import {MDCTextField} from '@material/textfield';
// import {MDCRipple} from '@material/ripple';
import {MDCIconButtonToggle} from '@material/icon-button';
// import { MDCCircularProgress } from '@material/circular-progress';
import { MDCLinearProgress } from '@material/linear-progress';

import { initPlayer } from '../games/player.js';
import { countDown } from '../games/countDown.js';
import { validateAnswers } from '../games/validateAnswers.js';
import { resumeGame } from '../games/resumeGame.js';
import { initIntroLogo } from '../components/logointro.js';
import { initLogoFadeOut } from '../components/logointro.js';
import { initEnterFadeIn } from '../components/logointro.js';
import { initScoresModal } from '../games/scoresModal.js';
import { initPendingPlayers } from '../components/logointro.js';
import { initEndScores } from '../components/logointro.js';
import { endGame } from '../games/endGame.js';

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  // initUpdateGameToPlaying();
  initPlaylistChoice();
  initGameCable();
  initPlayer();
  countDown(10);
  validateAnswers();
  resumeGame();

  initEndScores();
  initPendingPlayers();
  setTimeout(initIntroLogo,1000);
  setTimeout(initLogoFadeOut,2000);
  setTimeout(initEnterFadeIn,3000);
  initScoresModal();
  // endGame();


  // const linearProgress = new MDCLinearProgress(document.querySelector('.mdc-linear-progress'));
  // initCounterTenSeconds(linearProgress);

  // const textField = new MDCTextField(document.querySelector('.mdc-text-field'));


  // const iconToggleTwo = document.querySelector('#answer');
  //   if (iconToggleTwo) {
  //       iconToggleTwo.addEventListener("click", (event) => {
  //   // Do something (callback)
  //     if (iconToggleTwo.innerText === "done") {
  //       iconToggleTwo.innerText = "done_outline";
  //     } else if (iconToggleTwo.innerText === "done_outline") {
  //       iconToggleTwo.innerText = "done";
  //     }
  //   });
  // };


  // const iconToggleOne = document.querySelector('#play');
  //   if (iconToggleOne) {
  //      iconToggleOne.addEventListener("click", (event) => {
  //   // Do something (callback)
  //     if (iconToggleOne.innerText === "play_arrow") {
  //       iconToggleOne.innerText = "pause";
  //     } else if (iconToggleOne.innerText === "pause") {
  //       iconToggleOne.innerText = "play_arrow";
  //     }
  //   });
  // }
});

// material-design JavaScript instantiation

// const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));
// const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

// const circularProgress = new MDCCircularProgress(document.querySelector('.mdc-circular-progress'));
//const linearProgress = new MDCLinearProgress(document.querySelector('.mdc-linear-progress'));

// const iconToggleTwo = new MDCIconButtonToggle(document.querySelector('#answer'));
// const iconToggle = new MDCIconButtonToggle(document.querySelector('#play'));




