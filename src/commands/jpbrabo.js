exports.default = (client, target, _, message) => {
  const trimMessage = message.trim();

  if (trimMessage === '!jp' || trimMessage === '!brabo') {
    client.say(target, `/me É isso! SeemsGood https://twitch.tv/jpbrab0`);
  }
};
