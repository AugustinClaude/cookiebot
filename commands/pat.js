const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  const patUserAuto = message.mentions.users.first();
  const patUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  var random;

  if (!args[0])
    return message.reply(
      "Syntaxe incorrecte ! Exemple : <pat / <caress @membre **OU** <pat / <caress random !"
    );

  if (args[0] === "random") {
    var random = message.guild.members.random().user.username;
  } else if (patUser) var random = patUser.user.username;

  if (args[0] !== "random" && !patUser)
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur ! Ou alors vous avez mal orthographié \"__random__\""
    );

  const { body } = await superagent.get("https://nekos.life/api/v2/img/pat");

  try {
    if (message.author === patUserAuto) {
      const patEmbed = new Discord.RichEmbed()
        .setTitle(
          `**${
            message.author.username
          }** se caresse lui même O_o D'accord pourquoi pas '-'`
        )
        .setImage(body.url)
        .setColor("RANDOM");

      return message.channel.send(patEmbed);
    }

    const patEmbed = new Discord.RichEmbed()
      .setTitle(
        `**${
          message.author.username
        }** caresse **${random}** ! Trop mignon :heart:`
      )
      .setImage(body.url)
      .setColor("RANDOM");

    return message.channel.send(patEmbed);
  } catch (e) {
    message.channel.send(
      "Une erreur est survenue et il m'est impossible d'exécuter cette commande ! Peut-être que la syntaxe est incorrecte ou alors l'API utilisée ne fonctionne pas !"
    );
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["caress"],
  permLevel: 0
};

module.exports.help = {
  name: "pat"
};
