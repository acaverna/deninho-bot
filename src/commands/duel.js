const COMMAND = '!duel @deninhobot';

exports.default = (client, target, context, message) => {
  if (message === COMMAND) {
    client.say(target, `!accept`);
  }
};
