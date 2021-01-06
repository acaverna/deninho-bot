const COMMAND = '!podcast';

exports.default = (client, target, context, message) => {
  if (message === COMMAND) {
    client.say(
      target,
      'Siga o Podcast Moças da Web! https://anchor.fm/mocasdaweb/',
    );
  }
};
