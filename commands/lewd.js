const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  message.delete();
  const { body } = await superagent.get("https://nekos.life/api/v2/img/lewd");

  const nEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("🍆 Random Neko")
    .setImage(body.url);

  message.channel.send(nEmbed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["neko"],
  permLevel: 0
};

module.exports.help = {
  name: "lewd"
};
