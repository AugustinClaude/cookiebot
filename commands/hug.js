const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  const hugUserAuto = message.mentions.users.first();
  const hugUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  var random;

  if (args[0] === "random") {
    var random = message.guild.members.random().user.username;
  } else var random = hugUser.user.username;

  if (!hugUser)
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur !"
    );

  const { body } = await superagent.get("https://nekos.life/api/v2/img/hug");

  if (message.author === hugUserAuto) {
    const hugEmbed = new Discord.RichEmbed()
      .setTitle(
        `**${message.author.username}** s'est fait un calin à lui même O_o`
      )
      .setImage(body.url)
      .setColor("RANDOM");

    return message.channel.send(hugEmbed);
  }

  const hugEmbed = new Discord.RichEmbed()
    .setTitle(
      `**${
        message.author.username
      }** a fait un calin à **${random}** ! Trop mignon :heart:`
    )
    .setImage(body.url)
    .setColor("RANDOM");

  return message.channel.send(hugEmbed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "hug"
};
