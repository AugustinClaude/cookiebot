const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const args2 = message.content.split(" ");
  args2.shift();
  const manga = ("https://kitsu.io/manga?sort=recent&text=" + args2.join("%20"));
    
  message.reply(manga);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "manga"
};