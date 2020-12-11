const COMMAND = '!cancelar';
const MOTIVOS_CANCELAMENTO = [
  'não divulgar a própria live',
  'não ver a live do Pokemao',
  'não amar a Pachi',
  'nunca ter feito carinho no pandadomal',
  'ser estrelinha',
  'defender a $%#&#%',
  'espalhar fofoca',
  'fazer exposed da caverna',
  'criar fakenews do live coding',
  'participar da seita',
  'ser fã de linguagem de programação',
  'usar Rails',
  'cancelar o Pokemao',
  'ter pedido nota pro Professor Bruno Lopes',
  'não ver as narrações do JP',
  'revelado o rosto do Vitthin',
  'odiar o deninho',
  'não gostar dos raps do Freakyfog',
  'falar que a carol é mansa',
  'ter o mesmo gosto musical que o Adiel',
  'falar que a Morganna é mobile developer',
  'confundir a levxyca com a pachi',
  'ter feito fake donation',
  'ter reclamado da cantoria do pokemao',
  'não ter horário pra abrir live',
  'fazer fake bingo',
  'não escolher a porta 3',
  'falar que angu é igual á polenta',
  'bugar o bot',
  'abusar do mod',
  'ser humilde',
  'pedido para ressortear Kindle',
  'spamado !carinho',
  'não dar rt nos posts das lives',
  'ter o github verdinho',
  'falar que o sol está mais perto da terra que a Alfa Centauri',
  'não ter feito faculdade agrimental',
  'não usar HTTPS',
  'capturar fora da live',
  'gastar 11 milhões de Pokepoints pra comprar um porco',
  'não dar bom dia antes do !capturar',
];

exports.default = (client, target, context, message) => {
  const [command, user] = message.split(' ');

  const { username } = context;

  const motivo =
    MOTIVOS_CANCELAMENTO[
      Math.floor(Math.random() * MOTIVOS_CANCELAMENTO.length)
    ];

  if (command === COMMAND) {
    if (user) {
      client.say(target, `/me ${username} cancelou ${user} por ${motivo}`);
    }
  }
};
