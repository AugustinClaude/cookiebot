const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const mentionned = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  var value;

  if (!mentionned) value = message.author;
  else value = message.mentions.users.first();

  const avatarEmbed = new Discord.RichEmbed()
    .setTitle(`Avatar de **${value.username}**`)
    .setColor("RANDOM")
    .setImage(value.displayAvatarURL);

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
