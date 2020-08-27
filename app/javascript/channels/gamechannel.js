import consumer from "./consumer";

const initGameCable = () => {
  const gameContainer = document.getElementById('game');
  if (gameContainer) {
    const id = gameContainer.dataset.gameId;
    console.log(id);
    consumer.subscriptions.create({ channel: "GameChannel", id: id }, {
      received(data) {
        gameContainer.innerHTML = data;
        const event = document.createEvent("HTMLEvents");
        event.initEvent("turbolinks:load", true, true);
        event.eventName = "turbolinks:load";
        document.dispatchEvent(event);
      },
    });
  }
}

export { initGameCable };
