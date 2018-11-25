const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  const mentionned = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  if (!mentionned)
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur !"
    );

  message.channel.send(
    `${mentionned}, un Cookie :cookie: vous a été donné par ${message.author} !`
  );
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "cookie"
};
