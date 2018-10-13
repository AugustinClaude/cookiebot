const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  const slapUserAuto = message.mentions.users.first();
  const slapUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  if (args[0] === "random") {
    return message.reply(
      "Le Random ne fonctionne pas encore ! Merci de mentionner :)"
    );
  }

  if (!slapUser)
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur !"
    );

  const { body } = await superagent.get("https://nekos.life/api/v2/img/slap");

  if (message.author === slapUserAuto) {
    const slapEmbed = new Discord.RichEmbed()
      .setTitle(
        `**${message.author.username}** s'est frappé lui même O_o D'accord.`
      )
      .setImage(body.url)
      .setColor("RANDOM");

    return message.channel.send(slapEmbed);
  }

  const slapEmbed = new Discord.RichEmbed()
    .setTitle(
      `**${message.author.username}** a frappé **${
        message.mentions.users.first().username
      }** ! C'est vraiment méchant 😕 !`
    )
    .setImage(body.url)
    .setColor("RANDOM");

  return message.channel.send(slapEmbed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "slap"
};
