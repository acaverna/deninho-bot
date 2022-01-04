const COMMAND = '!tema';

exports.default = (client, target, context, message) => {
  if (message === COMMAND || message === '!theme') {
    client.say(
      target,
      'Dark Magic-Girl https://marketplace.visualstudio.com/items?itemName=AbstractUmbra.dark-magic-girl',
    );

    client.say(
      target,
      'Victor Mono Font https://rubjo.github.io/victor-mono/',
    );
  }
};
