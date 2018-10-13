const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  const tickleUserAuto = message.mentions.users.first();
  const tickleUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  if (args[0] === "random") {
    return message.reply(
      "Le Random ne fonctionne pas encore ! Merci de mentionner :)"
    );
  }

  if (!tickleUser)
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur !"
    );

  const { body } = await superagent.get("https://nekos.life/api/v2/img/tickle");

  if (message.author === tickleUserAuto) {
    const tickleEmbed = new Discord.RichEmbed()
      .setTitle(
        `**${
          message.author.username
        }** se chatouille lui même O_o Il est vraiment bizarre ce gars .-.`
      )
      .setImage(body.url)
      .setColor("RANDOM");

    return message.channel.send(tickleEmbed);
  }

  const tickleEmbed = new Discord.RichEmbed()
    .setTitle(
      `**${message.author.username}** chatouille **${
        message.mentions.users.first().username
      }** ! Le pauvre :joy:`
    )
    .setImage(body.url)
    .setColor("RANDOM");

  return message.channel.send(tickleEmbed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "tickle"
};
