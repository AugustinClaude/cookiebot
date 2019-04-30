const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  message.guild.members.get(bot.user.id).setNickname(args[0]);
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
