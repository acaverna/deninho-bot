const COMMAND = '!duel @deninhobot';

function sayFunc(client, target) {
  client.say(target, `!accept`);
}

function startFunction(client, target) {
  return setTimeout(sayFunc(client, target), 2000);
}

exports.default = (client, target, context, message) => {
  if (message === COMMAND) {
    startFunction(client, target);
  }
};
