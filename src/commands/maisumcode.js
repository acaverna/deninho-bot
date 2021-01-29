const msg =
  'A Mais1Code é um negócio de impacto social que une jovens da periferia e de comunidades de baixa renda a programadores que queiram causar transformação social e economica através do ensino da tecnologia. Conheça mais sobre a gente: http://www.mais1code.com.br/';

let messageSplited = [];

exports.default = (client, target, context, message) => {
  messageSplited = message.split(' ');
  if (
    messageSplited[0].toLowerCase() === '!maisumcode' ||
    messageSplited[0].toLowerCase() === '!mais1code' ||
    messageSplited[0].toLowerCase() === '!+1code' ||
    messageSplited[0].toLowerCase() === '!+umcode'
  ) {
    client.say(target, `/me ${msg}`);
  }
};
