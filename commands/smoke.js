const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send("**Je fume**").then(async msg => {
    setTimeout(() => {
      msg.edit("🚬");
    }, 500);
    setTimeout(() => {
      msg.edit("🚬 ☁ ");
    }, 1000);
    setTimeout(() => {
      msg.edit("🚬 ☁☁ ");
    }, 1500);
    setTimeout(() => {
      msg.edit("🚬 ☁☁☁ ");
    }, 2000);
    setTimeout(() => {
      msg.edit("🚬 ☁☁");
    }, 2500);
    setTimeout(() => {
      msg.edit("🚬 ☁");
    }, 3000);
    setTimeout(() => {
      msg.edit("🚬 ");
    }, 3500);
    setTimeout(() => {
      msg.edit("J'ai terminé ma clope ;)");
    }, 4000);
    console.log(`• ${message.author.username} à exécuté la commande : "<smoke"`);
  });
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "smoke"
};