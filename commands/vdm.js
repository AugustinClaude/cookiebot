/*const Discord = require("discord.js");
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
};*/

const request = require("request");
const Discord = require("discord.js");
exports.run = (bot, message, args) => {
  if (`${args[0]}` == "help") {
    message.delete(30000);
    const settingsEmbed = new Discord.RichEmbed()
      .setDescription(`Cette commande permet de raconte une VDM\n
    \n-Utilisation : *vdm `);
    message.channel.send(settingsEmbed).then(msg => {
      msg.delete(30000);
    });
    return;
  } else {
    message.delete(300000);
    // eslint-disable-next-line no-useless-escape
    const regex = /<p class=\"block hidden-xs\">\n<a href=\".*\">\n(.*) VDM/;
    request("https://www.viedemerde.fr/aleatoire", (error, response, body) => {
      if (error) {
        return console.error(error);
      }
      const vdm = regex.exec(body);
      const inviteEmbed = new Discord.RichEmbed()
        .setColor("#3ad1b2")
        .addField("Les vie de merdes ....", vdm[1])
        .setFooter(message.author.username, bot.user.displayAvatarURL);

      return message.channel.send(inviteEmbed).then(msg => {
        msg.delete(300000);
      });
    });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "vdm",
  aliases: []
};
