const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const mentionned = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  var mentionnedbot = message.mentions.users.first();
  var getvalueof;

  if (mentionnedbot) {
    var getvalueof = mentionnedbot;
  } else {
    var getvalueof = message.author;
  }

  if (!mentionned) {
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur !"
    );
  }

  const avatarEmbed = new Discord.RichEmbed()
    .setTitle(`Avatar de **${getvalueof.name}**`)
    .setColor("RANDOM")
    .setImage(getvalueof.displayAvatarURL);

  message.channel.send(avatarEmbed);
  message.delete();
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["a"],
  permLevel: 0
};

module.exports.help = {
  name: "avatar"
};
