const COMMAND = '!helloworld';

const HELLO_WORLDS = [
  `console.log('Hello World!');`,
  `print('Hello World!')`,
  `puts 'Hello World!'`,
  `echo 'Hello World!';`,
  `BEGIN {print "Hello World!"}`,
  `:echo "Hello World!"`,
  `System.out.println("Hello World!");`,
  `<?php  echo 'Hello World!';`,
  `+[-[<<[+[--->]-[<<<]]]>>>-]>-.---.>..>.<<<<-.<+.>>>>>.>.<<.<-.`,
];

exports.default = (client, target, context, message) => {
  if (message === COMMAND) {
    const index = Math.floor(Math.random() * HELLO_WORLDS.length);

    client.say(
      target,
      `/me Aqui está seu hello world @${context.username}: ${HELLO_WORLDS[index]}`,
    );
  }
};
