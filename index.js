const tmi = require('tmi.js');

const BOT_NAME = process.env.BOT_NAME || 'deninhobot';
const CHANEL_NAME = process.env.CHANNEL_NAME || 'pachicodes';
const TOKEN = process.env.TOKEN || '';

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
    `System.out.println("Hello World!");`,
    `<?php  echo 'Hello World!';`
];

const duelPlayers = []

function message(target, context, message, isBot) {
    if (isBot) {
        return;
    }

    if(init) {
        client.say(target, "/me Deninhobot tá on");
        init = false;
    }
    const msgBan = message
    const mensagem = message.trim();

    if (mensagem == '!helloworld') {
        const index = Math.floor((Math.random() * helloWorlds.length));

        client.say(target, `/me Aqui está seu hello world @${context.username}: ${helloWorlds[index]}`);
    }

    if (mensagem == '!duelo'){
        if (duelPlayers.length > 0) {
            duelPlayers.push(context.username)
            const winner = Math.floor(Math.random() * duelPlayers.length)
            client.say(target, `/me O vencedor é @${duelPlayers[winner]} <> The winner is @${duelPlayers[winner]}`)
            duelPlayers = []
        }else{
            duelPlayers.push(context.username)
            client.say(target, `/me Esperando um desafiante <> Expecting a challenger`)
        }
    }

    if (String(msgBan).startsWith("!ban")) {
        let msgRandom = Math.floor(Math.random() * 5) + 1;
        let alvoBan = String(mensagem).split(" ");
        if (alvoBan[1] == undefined) {
          client.say(
            alvo,
            `Para usar corretamente este comando digite !ban e ao lado o nick da pessoa que vc quer banir! SeemsGood`
          );
        } else {
          switch (msgRandom) {
            case 1:
              client.say(
                alvo,
                `${alvoBan[1]} foi banido por falar que php é ruim Kappa`
              );
              break;
            case 2:
              client.say(
                alvo,
                `${alvoBan[1]} foi banido por não ter feito bootcamp de 2dias de js >( `
              );
              break;
            case 3:
              client.say(alvo, `${alvoBan[1]} foi banido por usar windows LUL`);
              break;
            case 4:
              client.say(alvo, `${alvoBan[1]} foi banido por usar js Kappa`);
              break;
            case 5:
              client.say(
                alvo,
                `${alvoBan[1]} foi banido por não deixar no lurk...`
              );
              break;
            default:
              client.say(
                alvo,
                `${alvoBan[1]} foi banido por falar que java é bom Kappa`
              );
          }
        }
  }
}

function connectedChat(endereco, port) {
    console.log(`Bot is running at ${endereco}:${port}`);
}

client.on('message', message);
client.on('connected', connectedChat);

client.connect();
