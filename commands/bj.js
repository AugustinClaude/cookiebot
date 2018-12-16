const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  message.delete();
  const { body } = await superagent.get("https://nekos.life/api/v2/img/bj");

  const bjEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("🍆 Blow Jobs")
    .setImage(body.url);

  message.channel.send(bjEmbed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["blowjob"],
  permLevel: 0
};

module.exports.help = {
  name: "bj"
};
