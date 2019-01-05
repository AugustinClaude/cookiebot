const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  message.delete();
  if (message.channel.nsfw === false) {
    return message.channel.send("Vous ne pouvez pas utiliser de commandes NSFW dans ce channel ! Il faut qu'il sois défini comme étant NSFW !");
  }
  const args2 = message.content.split(" ");
  args2.shift();
  

  try {
    const gbEmbed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle(`🍆 Gelbooru Tag:  ${args2.join(" ")}`)
      .setImage(`https://www.gelbooru.com/index.php?page=post&s=list&tags=${args2.join("+")}`);

    await message.channel.send(gbEmbed);
  } catch (e) {
    message.channel.send(`Je n'ai rien trouvé pour le tag ${args2.join(" ")}`);
  }

};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "gelbooru"
};
