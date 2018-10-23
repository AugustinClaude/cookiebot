const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  const pokeUserAuto = message.mentions.users.first();
  const pokeUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  var random;

  if (!args[0])
    return message.reply(
      "An error has occured! Exemple : <poke @user **OR** <poke random !"
    );

  if (args[0] === "random") {
    var random = message.guild.members.random().user.username;
  } else if (pokeUser) var random = pokeUser.user.username;

  if (args[0] !== "random" && !pokeUser)
    return message.channel.send(
      "This user doesn't exist or you don't have pinged any users ! Or maybe you didn't write correctly the word : \"__random__\""
    );

  const { body } = await superagent.get("https://nekos.life/api/v2/img/poke");

  try {
    if (message.author === pokeUserAuto) {
      const pokeEmbed = new Discord.RichEmbed()
        .setTitle(`**${message.author.username}** poked himself O_o Ok...`)
        .setImage(body.url)
        .setColor("RANDOM");

      return message.channel.send(pokeEmbed);
    }

    const pokeEmbed = new Discord.RichEmbed()
      .setTitle(`**${message.author.username}** poked **${random}** ! `)
      .setImage(body.url)
      .setColor("RANDOM");

    return message.channel.send(pokeEmbed);
  } catch (e) {
    message.channel.send(
      "An error has occured and I can't execute this command ! Maybe the syntax is incorrect or the used API don't work !"
    );
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "poke"
};
