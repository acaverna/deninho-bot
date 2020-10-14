const COMMAND = '!duelo';
let duelPlayers = [];

exports.default = (client, target, context, message) => {
  if (message === COMMAND) {
    if (duelPlayers.length > 0) {
      duelPlayers.push(context.username);
      const winner = Math.floor(Math.random() * duelPlayers.length);
      client.say(
        target,
        `/me O vencedor é @${duelPlayers[winner]} <> The winner is @${duelPlayers[winner]}`,
      );
      duelPlayers = [];
    } else {
      duelPlayers.push(context.username);
      client.say(
        target,
        `/me Esperando um desafiante <> Waiting for a challenger`,
      );
    }
  }
};
