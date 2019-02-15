const Discord = require("discord.js");
const Kaori = require("kaori");
const kaori = new Kaori();

module.exports.run = async (bot, message, args) => {
  message.delete();
  if (message.channel.nsfw === false) {
    return message.channel.send(
      "Vous ne pouvez pas utiliser de commandes NSFW dans ce channel ! Il faut qu'il sois défini comme étant NSFW !"
    );
  }

  try {
    kaori
      .search("rule34", { tags: [args.join(" ")], limit: 1, random: true })
      .then(async images => {
        const image = images[0].common.fileURL;
        const gbEmbed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle(`🍆 Gelbooru Tag:  ${args.join(" ")}`)
          .setImage(image);
        await message.channel.send(gbEmbed);
      });
  } catch (e) {
    message.channel.send(`Je n'ai rien trouvé pour le tag ${args.join(" ")}`);
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gelb", "gb"],
  permLevel: 0
};

module.exports.help = {
  name: "gelbooru"
};
