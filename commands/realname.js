const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  const mentionned = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  message.channel.send(
    `Le vrai nom de **${mentionned.username}** est **${
      mentionned.user.username
    }** !`
  );

  message.channel.send(
    `**${
      mentionned.user.username
    }** n'a pas de surnom, c'est son nom d'origine !`
  );
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rname", "rn"],
  permLevel: 0
};

module.exports.help = {
  name: "realname"
};
