const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.channel.send("Voulez-vous vraiment me **déconnecter** ?");

  if (message.content == "Oui" || message.content === "y") {
    console.log("Déconnexion...");
    message.channel.send("Déconnexion effectué !");
    console.log(`[!] Boulanger est déconnecté par ${message.author.username}!`);
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mc"],
  permLevel: 0
};

module.exports.help = {
  name: "test"
};