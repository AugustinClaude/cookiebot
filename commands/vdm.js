const request = require("request");

module.exports.run = async (bot, message) => {
  const regex = /<p class=\"block hidden-xs\">\n<a href=\".*\">\n(.*) VDM/;
  request("https://www.viedemerde.fr/aleatoire", (error, response, body) => {
    if (error) {
      return console.error(error);
    }
    const vdm = regex.exec(body);

    try {
      message.reply(`${vdm[1]} VDM.`);
    } catch (e) {
      const cons = console.error(e);
      message.channel.send(cons);
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
