let qtdCaraio = 0;

exports.default = (client, target, context, message) => {
  if (message === '!caraio') {
    // eslint-disable-next-line no-plusplus
    qtdCaraio++;
    client.say(
      target,
      `/me Paxixa Códigos já falou caraio ${qtdCaraio} vezes nessa live.`,
    );
  }
};
