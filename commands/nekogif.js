const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  message.delete();
  if (message.channel.nsfw === false) {
    return message.channel.send("Vous ne pouvez pas utiliser de commandes NSFW dans ce channel ! Il faut qu'il sois défini comme étant NSFW !");
  }
  
  const { body } = await superagent.get(
    "https://nekos.life/api/v2/img/nsfw_neko_gif"
  );

  const ngEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("🍆 Random Neko Gif")
    .setImage(body.url);

  message.channel.send(ngEmbed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ng"],
  permLevel: 0
};

module.exports.help = {
  name: "nekogif"
};
