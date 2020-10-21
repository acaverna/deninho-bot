const COMMAND = '!caraio';

let qtdCaraio = 0;

exports.default = (client, target, context, message) => {
  if (message === COMMAND) {
    qtdCaraio += 1;
    client.say(
      target,
      `/me Paxixa Códigos já falou caraio ${qtdCaraio} ${
        qtdCaraio === 1 ? 'vez' : 'vezes'
      } nessa live.`,
    );
  }
};
