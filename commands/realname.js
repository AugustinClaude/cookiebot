const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  const mentionned = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  if (!mentionned) {
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur !"
    );
  }

  if (mentionned.nickname == null) {
    return message.channel.send(
      `**${
        mentionned.user.username
      }** n'a pas de surnom, c'est son nom d'origine !`
    );
  }

  if (mentionned.nickname !== mentionned.user.username) {
    return message.channel.send(
      `Le vrai nom de **${mentionned.nickname}** est **${
        mentionned.user.username
      }** !`
    );
  }
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
