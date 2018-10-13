const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  const insultUserAuto = message.mentions.users.first();
  const insultUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  if (args[0] === "random") {
    return message.reply(
      "Le Random ne fonctionne pas encore ! Merci de mentionner :)"
    );
  }

  if (!insultUser)
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur !"
    );

  const { body } = await superagent.get("https://nekos.life/api/v2/img/insult");

  if (message.author === insultUserAuto) {
    const insultEmbed = new Discord.RichEmbed()
      .setTitle(
        `**${
          message.author.username
        }** s'insulte lui même O_o C'est un cas désespéré...`
      )
      .setImage(body.url)
      .setColor("RANDOM");

    return message.channel.send(insultEmbed);
  }

  const insultEmbed = new Discord.RichEmbed()
    .setTitle(
      `**${message.author.username}** insulte **${
        message.mentions.users.first().username
      }** ! Ca part en clash 💢 ! `
    )
    .setImage(body.url)
    .setColor("RANDOM");

  return message.channel.send(insultEmbed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["baka"],
  permLevel: 0
};

module.exports.help = {
  name: "insult"
};
