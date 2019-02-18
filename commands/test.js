const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send(
    "Mais Wesh la <@517075284126859265>, renomme moi en Cookie fait pas chier la xD"
  );
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "test"
};
