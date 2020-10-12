/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const { Client } = require('tmi.js');
const { readdirSync } = require('fs');

const BOT_NAME = process.env.BOT_NAME || 'deninhobot';
const CHANEL_NAME = process.env.CHANNEL_NAME || 'pachicodes';
const TOKEN = process.env.TOKEN || '';

const opts = {
  identity: {
    username: BOT_NAME,
    password: TOKEN,
  },
  channels: [CHANEL_NAME],
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
});

client.connect();
