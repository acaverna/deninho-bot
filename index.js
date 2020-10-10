const tmi = require('tmi.js');

const BOT_NAME = 'deninhobot';
const CHANEL_NAME = 'pachicodes';
const TOKEN = '';

const opts = {
    identify: {
        username: BOT_NAME,
        password: TOKEN
    },
    channels: [CHANEL_NAME]
}

var init = true;

function message(target, context, message, isBot) {
    if (isBot) {
        return;
    }

    if(init) {
        client.say(target, "/me Deninhobot tá on");
        init = false;
    }

    const commandName = message.trim();

    if (commandName == '!helloworld') {
        client.say(target, "/me console.log('Hello World')");
    }
}

function connectedChat(endereco, port) {
    console.log(`Bot is running at ${endereco}:${port}`);
}

const client = new tmi.client(opts);

client.on('message', message);
client.on('connected', connectedChat);

client.connect();