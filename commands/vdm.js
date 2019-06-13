const Discord = require("discord.js");
const request = require("request");

module.exports.run = async (bot, message, args) => {
  const regex = /<p class=\"block hidden-xs\">\n<a href=\".*\">\n(.*) VDM/;
  request("https://www.viedemerde.fr/aleatoire", (error, response, body) => {
    if (error) {
      return console.error(error);
    }
    const vdm = regex.exec(body);
    console.log(vdm);

    try {
      message.reply(`${vdm[1]} VDM.`);
    } catch (e) {
      message.channel.send(":x: Une erreur s'est produite !");
      console.log(e);
    }
  });
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "vdm"
};
