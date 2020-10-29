const COMMAND = '!duel @deninhobot';

exports.default = (client, target, context, message) => {
  if (message === COMMAND) {
    setTimeout(() => {
      client.say(target, '!accept');
    }, 2000);
  }
};
