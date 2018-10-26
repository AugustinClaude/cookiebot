const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();

  const emojis = message.guild.emojis.map(e => e).join(" ");
  const emojisSize = message.guild.emojis.size;

  var noEmoji;

  if (emojisSize == 0)
    var noEmoji = ":x: Ce serveur n'a pas d'emojis personnalisés !";
  else
    var noEmoji = `📜 Ce serveur à ${emojisSize} emojis personnalisés, les voici :\n\n${emojis}`;

  message.channel.send(`${noEmoji}`);
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
