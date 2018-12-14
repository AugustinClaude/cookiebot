const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  const filtered = bot.points.filter(p => p.guild === message.guild.id);
  const rightNow = new Date();
  const toRemove = filtered.filter(data => {
    return (
      !message.guild.members.has(data.user) ||
      rightNow - 2592000000 > data.lastSeen
    );
  });
  toRemove.forEach(data => {
    bot.points.delete(`${message.guild.id}-${data.user}`);
  });
  message.channel
    .send(`J'ai nettoyé ${toRemove.size} anciens membres.`)
    .then(msg => msg.delete(2000));
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["purgelb"],
  permLevel: 0
};

module.exports.help = {
  name: "cleanlb"
};
