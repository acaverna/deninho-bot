const COMMAND = '!duelo';
let duelPlayers = [];

exports.default = (client, target, context, message) => {
  if (message === COMMAND) {
    if (duelPlayers.length > 0) {
      duelPlayers.push(context.username);
      const winner = Math.floor(Math.random() * duelPlayers.length);
      client.say(
        target,
        `/me Quem ganhou foi @${duelPlayers[winner]} <> The winner is @${duelPlayers[winner]}`,
      );
      duelPlayers = [];
    } else {
      duelPlayers.push(context.username);
      client.say(
        target,
        `/me Esperando alguém para desafiar <> Waiting for a challenger`,
      );
    }
  }
};
