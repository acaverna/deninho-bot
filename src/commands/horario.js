const COMMAND = '!horario';

exports.default = (client, target, context, message) => {
  if (message === COMMAND) {
    client.say(
      target,
      '/me Terça e Quinta 10hrs lives em Português | Segunda e Sexta 12hrs lives em Inglês',
    );
  } else if (message === '!schedule') {
    client.say(
      target,
      '/me Tuesday and Thursday 08am lives in Portuguese | Monday and Friday 10am lives in English',
    );
  }
};
