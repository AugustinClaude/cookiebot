const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  const iconEmbed = new Discord.RichEmbed()
    .setTitle(`Icône du serveur **${message.guild.name}**`)
    .setColor("RANDOM")
    .setImage(message.guild.iconURL);

  message.channel.send(iconEmbed);
  message.delete();
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0
};

module.exports.help = {
  name: "icon"
};
