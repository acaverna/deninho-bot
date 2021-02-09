exports.default = (client, target, context, message) => {
  if (message === '!horario') {
    client.say(
      target,
      '/me Terça e Quinta 10hrs lives em Português | Segunda 11hrs, Quarta 18:30 e Sexta 16hrs live em inglês',
    );
  } else if (message === '!schedule') {
    client.say(
      target,
      '/me Monday 9am-EST // 6am-PST, Wednesday 4:30pm-EST // 1:30pm-PST and Friday 2pm-EST // 11am-PST lives in English | Tuesday and Thursday 8am-EST // 5am-PST lives in Portuguese',
    );
  }
};
