const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  message.delete();
  const { body } = await superagent.get(
    "https://nekos.life/api/v2/img/classic"
  );

  const classicEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("🍆 Classic")
    .setImage(body.url);

  message.channel.send(classicEmbed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "classic"
};
