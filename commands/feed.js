const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  const feedUserAuto = message.mentions.users.first();
  const feedUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  if (args[0] === "random") {
    return message.reply(
      "Le Random ne fonctionne pas encore ! Merci de mentionner :)"
    );
  }

  if (!feedUser)
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur !"
    );

  const { body } = await superagent.get("https://nekos.life/api/v2/img/feed");

  if (message.author === feedUserAuto) {
    const feedEmbed = new Discord.RichEmbed()
      .setTitle(`**${message.author.username}** se donne à manger... o_O`)
      .setImage(body.url)
      .setColor("RANDOM");

    return message.channel.send(feedEmbed);
  }

  const feedEmbed = new Discord.RichEmbed()
    .setTitle(
      `**${message.author.username}** donne à manger à **${
        message.mentions.users.first().username
      }** ! Belle action de sa part ! 🥖`
    )
    .setImage(body.url)
    .setColor("RANDOM");

  return message.channel.send(feedEmbed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "feed"
};
