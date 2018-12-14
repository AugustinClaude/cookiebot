const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  const key = `${message.guild.id}-${message.author.id}`;
  return message.reply(
    `**Tu es niveau \`${bot.points.get(key, "level")}\` avec \`${bot.points.get(
      key,
      "points"
    )}\` points d'expérience!**`
  );
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["lvl", "rank", "xp"],
  permLevel: 0
};

module.exports.help = {
  name: "level"
};
