const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message) => {
  const { body } = await superagent.get("https://nekos.life/api/v2/img/lizard");

  const lizardEmbed = new Discord.RichEmbed()
    .setTitle("🦎 Lézard")
    .setImage(body.url)
    .setColor("RANDOM");

  return message.channel.send(lizardEmbed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["lezard"],
  permLevel: 0
};

module.exports.help = {
  name: "lizard"
};
