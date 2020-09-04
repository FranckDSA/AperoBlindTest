import consumer from "./consumer";

let gameCableInitialized = false;

const initGameCable = () => {
  const gameContainer = document.getElementById('game');
  if (gameContainer && gameCableInitialized == false) {
    console.log("InitGameCable")
    const id = gameContainer.dataset.gameId;
    const user = gameContainer.dataset.user;
    const playerId = gameContainer.dataset.playerId
    consumer.subscriptions.create({ channel: "GameChannel", id: id }, {
      received(data) {
        console.log("Data received from current game channel and broadcasted");
        console.log(user)
        if (user == "true") {
          gameContainer.innerHTML = data.user;
        }
        else {
          gameContainer.innerHTML = data.player;
          console.log(data.ranks)
          const dataPlayer = data.ranks.find(element => element["id"] = parseInt(playerId) )
          console.log(dataPlayer)
          const playerMessage = document.querySelector(".message-playing");
          if (playerMessage) {
            if (dataPlayer.rank === 1) {
              playerMessage.innerHTML = `YOU'RE THE BEST!`
            } else if (dataPlayer.rank < 3) {
              playerMessage.innerHTML = `WELL DONE!`
            } else if (dataPlayer.rank < 5) {
              playerMessage.innerHTML = `KEEP GOING!`
            } else {
              playerMessage.innerHTML = `LOOSER ...`
            }
            const playerRank = document.querySelector(".ranking");
            playerRank.innerHTML = `Your rank: ${dataPlayer.rank} / ${data.ranks.length}`
          }
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
