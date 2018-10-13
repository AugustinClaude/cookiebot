const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  const cuddleUserAuto = message.mentions.users.first();
  const cuddleUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  if (args[0] === "random") {
    return message.reply(
      "Le Random ne fonctionne pas encore ! Merci de mentionner :)"
    );
  }

  if (!cuddleUser)
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur !"
    );

  const { body } = await superagent.get("https://nekos.life/api/v2/img/cuddle");

  if (message.author === cuddleUserAuto) {
    const cuddleEmbed = new Discord.RichEmbed()
      .setTitle(
        `**${
          message.author.username
        }** se caresse lui même O_o Toujours aussi bizarre ce gars ;-;`
      )
      .setImage(body.url)
      .setColor("RANDOM");

    return message.channel.send(cuddleEmbed);
  }

  const cuddleEmbed = new Discord.RichEmbed()
    .setTitle(
      `**${message.author.username}** caresse **${
        message.mentions.users.first().username
      }** ! Trop mignon :heart:`
    )
    .setImage(body.url)
    .setColor("RANDOM");

  return message.channel.send(cuddleEmbed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["caress"],
  permLevel: 0
};

module.exports.help = {
  name: "cuddle"
};
