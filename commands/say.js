const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES") &&
  message.member.id !== "302901933419790347") {
    return message.reply(
      "Vous n'avez pas la permission d'exécuter cette commande !"
    );
  }
  const messageToBot = args.join(" ");

  if (messageToBot) {
    message.delete().catch();
    message.channel.send(messageToBot);
  }

  if (!messageToBot) {
    return message.reply("Syntaxe : <say [Message à me faire dire]");
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "say"
};
