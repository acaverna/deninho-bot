exports.default = (client, target, context, message) => {
  if (message === '!horario') {
    client.say(
      target,
      '/me Terça 10:30hrs e Quinta 17:00hrs lives em Português | Seg, Ter, Qua, Sex 11hrs lives em Inglês',
    );
  } else if (message === '!schedule') {
    client.say(
      target,
      '/me Mon, Wed, Thu, Fri 9am-EST and Tuesday 3:30pm-EST streams in English | Tuesday 8:30am-EST and Thursday 3pm-EST streams in Portuguese',
    );
  }
};
