const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const emojis = message.guild.emojis.map(e => e).join(" ");
  const emojisSize = message.guild.emojis.size;

  message.channel.send(
    `Ce serveur à ${emojisSize} emojis personnalisés, les voici :\n${emojis}`
  );
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["emojis", "e"],
  permLevel: 0
};

module.exports.help = {
  name: "emoji"
};
