const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  const pokeUserAuto = message.mentions.users.first();
  const pokeUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  if (args[0] === "random") {
    return message.reply(
      "Random is not working yet ! Please, mention users :)"
    );
  }

  if (!pokeUser)
    return message.channel.send(
      "This user doesn't exist or you do not have mentionned a user !"
    );

  const { body } = await superagent.get("https://nekos.life/api/v2/img/poke");

  if (message.author === pokeUserAuto) {
    const pokeEmbed = new Discord.RichEmbed()
      .setTitle(`**${message.author.username}** poked himself O_o Ok...`)
      .setImage(body.url)
      .setColor("RANDOM");

    return message.channel.send(pokeEmbed);
  }

  const pokeEmbed = new Discord.RichEmbed()
    .setTitle(
      `**${message.author.username}** poked **${
        message.mentions.users.first().username
      }** ! `
    )
    .setImage(body.url)
    .setColor("RANDOM");

  return message.channel.send(pokeEmbed);
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
