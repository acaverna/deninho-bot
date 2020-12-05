const COMMAND = '!amoapachi';

exports.default = (client, target, context, message) => {
  message = message.split(' ');
  if (message[0] === COMMAND) {
    if (message.length === 1) {
      client.say(target, `${context.username} ama a Pachi!`);
    }
    if (message.length === 2) {
      message[1] = message[1].replace('@', '');
      client.say(target, `${message[1]} ama a Pachi!`);
    }
  }
};
