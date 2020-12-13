const COMMAND = '!girls';

exports.default = (client, target, context, message) => {
  if (message === COMMAND) {
    client.say(
      target,
      '/me Confira as nossas divas da twitch: https://livecodergirlsbr.github.io/sobre/',
    );
  }
};
