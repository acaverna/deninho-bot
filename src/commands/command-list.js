exports.default = (client, target, context, message) => {
  switch (message) {
    case '!comandos':
    case '!commands':
    case '!help':
    case '!ajuda':
      client.say(
        target,
        `Os comandos do deninho bot são: !ban @nomedapessoa, !caraio, !duelo, !helloworld e 
        !duel @deninhobot`,
      );
      break;
  }
};
