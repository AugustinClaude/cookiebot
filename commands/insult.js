const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  const insultUserAuto = message.mentions.users.first();
  const insultUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  var random;

  if (!args[0])
    return message.reply(
      "Syntaxe incorrecte ! Exemple : <insult / <baka @membre **OU** <insult / <baka random !"
    );

  if (args[0] === "random") {
    var random = message.guild.members.random().user.username;
  } else if (insultUser) var random = insultUser.user.username;

  if (args[0] !== "random" && !insultUser)
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur ! Ou alors vous avez mal orthographié \"__random__\""
    );

  const { body } = await superagent.get("https://nekos.life/api/v2/img/baka");

  try {
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
        `**${
          message.author.username
        }** insulte **${random}** ! Ca part en clash 💢 ! `
      )
      .setImage(body.url)
      .setColor("RANDOM");

    return message.channel.send(insultEmbed);
  } catch (e) {
    message.channel.send(
      "Une erreur est survenue et il m'est impossible d'exécuter cette commande ! Peut-être que la syntaxe est incorrecte ou alors l'API utilisée ne fonctionne pas !"
    );
  }
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
