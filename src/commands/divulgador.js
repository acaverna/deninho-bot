const COMMANDS_POKE = ['!selva', '!selvagem', '!capturar'];
const COMMANDS_LEV = ['!calma', '!eita'];

exports.default = (client, target, context, message) => {
  let msg = '';

  if (COMMANDS_POKE.includes(message)) {
    if (message === '!capturar') {
      msg = `${context.username} você capturou o link da live correta: twitch.tv/pokemaobr`;
    } else if (message === '!selvagem') {
      msg = `${context.username} capturou um link selvagem: twitch.tv/pokemaobr`;
    } else {
      msg = `SELVA cola aqui que é sucesso: twitch.tv/pokemaobr`;
    }
  } else if (COMMANDS_LEV.includes(message)) {
    if (message === '!eita') {
      msg =
        'Eita parece que você tá na live errada. Cola nessa aqui: twitch.tv/levxyca';
    } else {
      msg = 'Calma a live certa é essa aqui: twitch.tv/levxyca';
    }
  }

  if (msg) {
    client.say(target, msg);
  }
};
