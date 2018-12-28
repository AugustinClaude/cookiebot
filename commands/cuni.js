const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  message.delete();
  if (message.channel.nsfw === false) {
    return message.channel.send("Vous ne pouvez pas utiliser de commandes NSFW dans ce channel ! Il faut qu'il sois défini comme étant NSFW !");
  }
  
  const { body } = await superagent.get("https://nekos.life/api/v2/img/kuni");

  const cEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("🍆 Random Kuni")
    .setImage(body.url);

  message.channel.send(cEmbed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kuni"],
  permLevel: 0
};

module.exports.help = {
  name: "cuni"
};
