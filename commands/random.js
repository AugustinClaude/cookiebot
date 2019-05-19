module.exports.run = async (bot, message) => {
  message.delete();
  var random = message.guild.members.random();

  message.channel.send(
    `Mon système d'aléatoire a décidé de choisir ${random} !`
  );
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rdm"],
  permLevel: 0
};

module.exports.help = {
  name: "random"
};
