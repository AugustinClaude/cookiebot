const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  message.delete();
  const { body } = await superagent.get(
    "https://nekos.life/api/v2/img/Random_hentai_gif"
  );

  const hgEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("🍆 Random Hentai Gif")
    .setImage(body.url);

  message.channel.send(hgEmbed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hg"],
  permLevel: 0
};

module.exports.help = {
  name: "hentaigif"
};
