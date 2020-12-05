const COMMAND = '!amoapachi';
let messageSplited = [];

exports.default = (client, target, context, message) => {
  messageSplited = message.split(' ');
  if (messageSplited[0] === COMMAND) {
    if (messageSplited.length === 1) {
      client.say(target, `${context.username} ama a Pachi!`);
    }
    if (messageSplited.length === 2) {
      messageSplited[1] = messageSplited[1].replace('@', '');
      client.say(target, `${messageSplited[1]} ama a Pachi!`);
    }
  }
};
