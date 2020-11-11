const COMMAND = '!duel';

exports.default = (client, target, context, message) => {
  const splittedMessage = String(message).split(' ');

  if (
    (splittedMessage[0] === COMMAND && splittedMessage[1] === 'deninhobot') || splittedMessage[0] === COMMAND && splittedMessage[1] === '@deninhobot'
  ) {
    setTimeout(() => {
      client.say(target, '!accept');
    }, 2000);
  }
};
