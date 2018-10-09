const Discord = require("discord.js");
const exp = require("../exp.json");

module.exports.run = async (bot, message, args) => {
  /*const key = `${message.guild.id}-${message.author.id}`;
  const currentLvl = bot.points.get(key, "level");
  const Exp = bot.points.get(key, "points");
  const XpOfNextLvl = 500;
  const nextLvl = currentLvl + 1;
  const XpForLvlUp = XpOfNextLvl - Exp;

  const lvlEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setColor("#5dF9")
    .addField("Niveau Actuel", currentLvl, true)
    .addField("Niveau suivant", nextLvl, true)
    .addField("Expérience", Exp, true)
    .addField("Expérience à atteindre", XpOfNextLvl, true)
    .addField("Expérience requise", XpForLvlUp, true)
    .setFooter(bot.user.username + " ©", bot.user.displayAvatarURL)
    .setThumbnail(message.author.displayAvatarURL)
    .setTimestamp();

  return message.channel.send(lvlEmbed);*/

  if (!exp[message.author.id]) {
    exp[message.author.id] = {
      exp: 0,
      niveau: 1
    };
  }

  const cExp = exp[message.author.id].exp;
  const cLvl = exp[message.author.id].niveau;
  const xpOfnextLvl = cLvl * 500;
  const xpForLvlUp = xpOfnextLvl - cExp;
  const nextLVL = cLvl + 1;

  const nivEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setColor("#5dF9")
    .addField("Niveau Actuel", cLvl, true)
    .addField("Niveau suivant", nextLVL, true)
    .addField("Expérience", cExp, true)
    .addField("Expérience à atteindre", xpOfnextLvl, true)
    .addField("Expérience requise", xpForLvlUp, true)
    .setFooter(bot.user.username + " ©", bot.user.displayAvatarURL)
    .setThumbnail(message.author.displayAvatarURL)
    .setTimestamp();

  return message.channel.send(nivEmbed);
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
