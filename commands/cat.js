const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  const { body } = await superagent.get("http://aws.random.cat//meow");

  const catEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("🐱 Image de Chat")
    .setImage(body.file);
  message.channel.send(catEmbed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["chat"],
  permLevel: 0
};

module.exports.help = {
  name: "cat"
};
