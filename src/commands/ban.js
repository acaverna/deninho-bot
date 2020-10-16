const COMMAND = '!ban';

exports.default = (client, target, context, message) => {
  if (String(message).startsWith(COMMAND)) {
    const randomBan = Math.floor(Math.random() * 10000);
    const msgRandom = Math.floor(Math.random() * 5) + 1;

    const alvoBan = String(message).split(' ');
    if (alvoBan[1] === undefined) {
      client.say(
        target,
        `Para usar corretamente este comando digite !ban e ao lado o nick da pessoa que vc quer banir! SeemsGood`,
      );
    } else {
      switch (msgRandom) {
        case 1:
          client.say(
            target,
            `/me ${context.username} baniu ${alvoBan[1]} por falar que php é ruim Kappa`,
          );
          break;
        case 2:
          client.say(
            target,
            `/me ${context.username} baniu ${alvoBan[1]} por não ter feito bootcamp de 2dias de js >( `,
          );
          break;
        case 3:
          client.say(
            target,
            `/me ${context.username} baniu ${alvoBan[1]} por usar Mac LUL`,
          );
          break;
        case 4:
          client.say(
            target,
            `/me ${context.username} baniu ${alvoBan[1]} por usar java Kappa`,
          );
          break;
        case 5:
          client.say(
            target,
            `/me ${context.username} baniu ${alvoBan[1]} por não deixar no lurk...`,
          );
          break;
        default:
          client.say(
            target,
            `/me ${context.username} baniu ${alvoBan[1]} por falar que java é bom Kappa`,
          );
      }
    }
    if (randomBan > 100 && randomBan < 1000) {
      client.say(target, `/timeout ${alvoBan[1]} 10`);
      client.say(target, `/me ${alvoBan[1]} levou ban`);
    } else if (randomBan > 1000 && randomBan < 7000) {
      client.say(target, `/timeout ${context.username} 10`);
      client.say(target, `${context.username} levou ban`);
    } else {
      client.say(target, `Ninguém levou ban.`);
    }
  }
};
