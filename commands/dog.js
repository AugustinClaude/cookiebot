const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message) => {
  const { body } = await superagent.get("http://random.dog/woof.json");

  const dogEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("🐶 Chien")
    .setImage(body.url);

  message.channel.send(dogEmbed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["chien"],
  permLevel: 0
};

module.exports.help = {
  name: "dog"
};
