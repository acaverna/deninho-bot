exports.default = (client, target, context, message) => {
  if (message === '!horario') {
    client.say(
      target,
      '/me Terça e Quinta 10:00hrs lives em Português | Quarta e Sexta 11:30hrs lives em Inglês',
    );
  } else if (message === '!schedule') {
    client.say(
      target,
      '/me Tuesday and Thursday 9:00am-EST streams in Portuguese | Wednesday and Friday 10:30am-EST streams in English',
    );
  }
};
