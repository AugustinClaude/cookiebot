const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    const embed = new Discord.RichEmbed()
      .setColor("#FE0101")
      .setDescription(
        ":x: Vous ne disposez pas des permissions nécessaires pour effectuer cette commande."
      );
    return message.channel.send(embed);
  }

  if (!args[0])
    return message.channel.send(
      "Tu dois préciser un nombre entre 1 et 100 de mesages supprimer !"
    );
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel
      .send(`:satellite: ${args[0]} message ont supprimés !`)
      .then(msg => msg.delete(1000));
  });
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "test"
};
