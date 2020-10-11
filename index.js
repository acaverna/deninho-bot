const tmi = require('tmi.js');

const BOT_NAME = 'deninhobot';
const CHANEL_NAME = 'pachicodes';
const TOKEN = '';

const opts = {
    identity: {
        username: BOT_NAME,
        password: TOKEN
    },
    channels: [CHANEL_NAME]
}

const client = new tmi.client(opts);

var init = true;

const helloWorlds = [
    `console.log('Hello World!');`,
    `print('Hello World!')`,
    `puts 'Hello World!'`,
    `echo 'Hello World!';`,
    `BEGIN {print "Hello World!"}`,
    `:echo "Hello World!"`,
    `System.out.println("Hello World!");`
];

var duelPlayers = []

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
        const index = Math.floor((Math.random() * helloWorlds.length));

        client.say(target, `/me Aqui está seu hello world @${context.username}: ${helloWorlds[index]}`);
    }

    if (commandName == '!duelo'){
        if(duelPlayer >= 1){
            duelPlayers.push(context.username)
            const winner = Math.floor(Math.random() * duelPlayers.length)
            client.say(target, `/me O vencedor é @${duelPlayers[winner]} <> The winner is @${duelPlayers[winner]}`)
        }
        duelPlayers.push(context.username)
        client.say(target, `/me Esperando um desafiante <> Expecting a challenger`)
    }
}

function connectedChat(endereco, port) {
    console.log(`Bot is running at ${endereco}:${port}`);
}

client.on('message', message);
client.on('connected', connectedChat);

client.connect();