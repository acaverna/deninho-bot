const COMMAND = '!rt';
let rt;

exports.default = (client, target, context, message) => {
  if (message === COMMAND) {
    if (rt) {
      client.say(target, `/me ${rt}`);
    }
  } else if (
    message.split(' ')[0] === '!addrt' &&
    (context.mod || context.username === 'pachicodes')
  ) {
    rt = message.replace('!addrt', '');
    client.say(target, `/me ${rt}`);
  }
};
