const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  const huguserAuto = message.mentions.users.first();
  const hugUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  if (args[0] === "random") {
    return message.reply(
      "Le Random ne fonctionne pas encore ! Merci de mentionner :)"
    );
  }

  if (!hugUser)
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur !"
    );

  const { body } = await superagent.get("https://nekos.life/api/v2/img/hug");
  /*"/img/tickle",  -> guili
  "/img/slap",      -> frapper
  "/img/poke",      -> touche / pousser / enfin il touche un mec ou une meuf pour le **réveiller** ou autre
  "/img/pat",       -> réconforter / ca va aller hein
  "/img/baka";      -> INSULT
  "/img/feed",      -> donne a bouffer
  "/img/cuddle",    -> joue contre joue / reconforter
  "/img/lizard",    -> LEZARD WOAH TROP BIEN :D // IMAGE ************************* DONE
  "/img/kiss",      -> bisou wesh
*/
  if (message.author === huguserAuto) {
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
      `**${message.author.username}** a fait un calin à **${
        message.mentions.users.first().username
      }** ! Trop mignon :heart:`
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
