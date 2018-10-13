const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  const kissUserAuto = message.mentions.users.first();
  const kissUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  if (args[0] === "random") {
    return message.reply(
      "Le Random ne fonctionne pas encore ! Merci de mentionner :)"
    );
  }

  if (!kissUser)
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur !"
    );

  const { body } = await superagent.get("https://nekos.life/api/v2/img/kiss");

  if (message.author === kissUserAuto) {
    const kissEmbed = new Discord.RichEmbed()
      .setTitle(
        `**${
          message.author.username
        }** s'embrasse lui même O_o Comment c'est possible ? o_O`
      )
      .setImage(body.url)
      .setColor("RANDOM");

    return message.channel.send(kissEmbed);
  }

  const kissEmbed = new Discord.RichEmbed()
    .setTitle(
      `**${message.author.username}** embrasse **${
        message.mentions.users.first().username
      }** ! Trop mignon :heart:`
    )
    .setImage(body.url)
    .setColor("RANDOM");

  return message.channel.send(kissEmbed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "kiss"
};
