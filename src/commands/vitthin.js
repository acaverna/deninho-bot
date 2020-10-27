const COMMAND = '!vitthin';

exports.default = (client, target, context, message) => {
  if (message == COMMAND) {
    client.say(target, `Piu Piu Piu`);
  }
};
