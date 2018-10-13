const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  const patUserAuto = message.mentions.users.first();
  const patUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  if (args[0] === "random") {
    return message.reply(
      "Le Random ne fonctionne pas encore ! Merci de mentionner :)"
    );
  }

  if (!patUser)
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur !"
    );

  const { body } = await superagent.get("https://nekos.life/api/v2/img/pat");

  if (message.author === patUserAuto) {
    const patEmbed = new Discord.RichEmbed()
      .setTitle(
        `**${
          message.author.username
        }** se réconforte lui même O_o D'accord pourquoi pas '-'`
      )
      .setImage(body.url)
      .setColor("RANDOM");

    return message.channel.send(patEmbed);
  }

  const patEmbed = new Discord.RichEmbed()
    .setTitle(
      `**${message.author.username}** réconforte **${
        message.mentions.users.first().username
      }** ! Trop mignon :heart:`
    )
    .setImage(body.url)
    .setColor("RANDOM");

  return message.channel.send(patEmbed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "pat"
};
