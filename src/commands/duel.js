const COMMAND = '!duel @deninhobot';

function startFunction() {
  return setTimeout(sayFunc, 2000);
}

function sayFunc() {
  client.say(
    target,
    `!accept`,
  );
}

exports.default = (client, target, context, message) => {
    if (message === COMMAND) {
      startFunction();
    }
};
