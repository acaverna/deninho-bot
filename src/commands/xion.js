const COMMAND = '!shion';

exports.default = (client, target, context, message) => {
  if (message === COMMAND || message === '!lana') {
    client.say(
      target,
      '/me miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau ',
    );
  }
};
