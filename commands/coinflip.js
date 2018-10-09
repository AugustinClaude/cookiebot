const Discord = require("discord.js");
var randnum;

module.exports.run = async (bot, message, args) => {
  random();

  if (randnum == 1) {
    message.channel.send("J'ai lancé une pièce et c'est tombé sur **PILE** !");
    console.log("PILE!");
  }

  if (randnum == 2) {
    message.channel.send("J'ai lancé une pièce et c'est tombé sur **FACE** !");
    console.log("FACE!");
  }

  function random(min, max) {
    min = Math.floor(1);
    max = Math.ceil(2);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cf"],
  permLevel: 0
};

module.exports.help = {
  name: "coinflip"
};