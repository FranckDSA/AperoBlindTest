import consumer from "./consumer";

let gameCableInitialized = false;

const initGameCable = () => {
  const gameContainer = document.getElementById('game');
  if (gameContainer && gameCableInitialized == false) {
    console.log("InitGameCable")
    const id = gameContainer.dataset.gameId;
    const user = gameContainer.dataset.user;
    consumer.subscriptions.create({ channel: "GameChannel", id: id }, {
      received(data) {
        console.log("Data received from current game channel and broadcasted");
        if (user == "true") {
          gameContainer.innerHTML = data.user;
          // gameContainer.innerHTML = data;
        }
        else {
          gameContainer.innerHTML = data.player;
          // gameContainer.innerHTML = data;
        }
        const event = document.createEvent("HTMLEvents");
        event.initEvent("turbolinks:load", true, true);
        event.eventName = "turbolinks:load";
        document.dispatchEvent(event);
      },
    });
    gameCableInitialized = true;
  }
}

export { initGameCable };
