import consumer from "./consumer";

const initGameCable = () => {
  const gameContainer = document.getElementById('game');
  if (gameContainer) {
    const id = gameContainer.dataset.gameId;
    const user = gameContainer.dataset.user;
    console.log(id);
    consumer.subscriptions.create({ channel: "GameChannel", id: id }, {
      received(data) {
        console.log(user)
        if (user == "true") {
          gameContainer.innerHTML = data.user;
        }
        else {
          gameContainer.innerHTML = data.player;
        }

        const event = document.createEvent("HTMLEvents");
        event.initEvent("turbolinks:load", true, true);
        event.eventName = "turbolinks:load";
        document.dispatchEvent(event);
      },
    });
  }
}

export { initGameCable };
