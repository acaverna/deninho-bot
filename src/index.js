/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const { Client } = require('tmi.js');
const { readdirSync } = require('fs');

require('dotenv').config();

const { BOT_NAME, CHANNEL_NAME, TOKEN } = process.env;

const opts = {
  identity: {
    username: BOT_NAME,
    password: TOKEN,
  },
  channels: [CHANNEL_NAME],
};

const client = new Client(opts);

readdirSync(`${__dirname}/commands`)
  .filter((file) => file.slice(-3) === '.js')
  .forEach((file) => {
    client.on('message', (target, context, message, isBot) => {
      if (isBot) return;
      require(`./commands/${file}`).default(client, target, context, message);
    });
  });

client.on('connected', (host, port) => {
  // eslint-disable-next-line no-console
  console.log(`Bot is running at ${host}:${port}`);
  // eslint-disable-next-line no-console
  console.log(`Joined channel: ${CHANNEL_NAME}`);

  setTimeout(() => {
    client.say(CHANNEL_NAME, 'Deninho está on!');
  }, 2000);
});

client.connect();
