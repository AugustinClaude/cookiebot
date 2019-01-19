const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.channel.send("Voulez-vous vraiment me **déconnecter** ?");

  if (message.content === "Oui" || message.content === "oui" || message.content === "y") {
    console.log("Déconnexion...");
    message.channel.send("Déconnexion effectué !");
    console.log(`[!] Boulanger est déconnecté par ${message.author.username}!`);
  }
};

module.exports.help = {
  name: "test"
};