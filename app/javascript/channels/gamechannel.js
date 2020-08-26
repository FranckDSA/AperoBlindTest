import consumer from "./consumer";

const initGameCable = () => {
  const gameContainer = document.getElementById('game');
  if (gameContainer) {
    const id = gameContainer.dataset.gameId;
    console.log(id);
    consumer.subscriptions.create({ channel: "GameChannel", id: id }, {
      received(data) {
        gameContainer.innerHTML = data; // called when data is broadcast in the cable
      },
    });
  }
}

export { initGameCable };
