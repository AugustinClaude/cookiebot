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

  const { body } = await superagent.get("https://nekos.life/api/v2/img/feed");
  /*"/img/tickle",  -> guili
  "/img/slap",      -> frapper
  "/img/poke",      -> touche / pousser / enfin il touche un mec ou une meuf pour le **réveiller** ou autre
  "/img/pat",       -> réconforter / ca va aller hein 
  "----------X /img/neko", //IMAGE     -> IMAGE DE MEUF un peu voila mais pas trop ^^ X <- ceci est une croix------
  "/img/meow",      -> CHATS CHATS CHATS ET DES GIF EN PLUS !!! // IMAGE + GIFS
  "/img/lizard",    -> LEZARD WOAH TROP BIEN :D // IMAGE
  "/img/kiss",      -> bisou wesh
  "/img/hug",       -> calin
  "----------X /img/fox_girl",  -> OUI BAH UNE MEUF QUOI //IMAGE X ---------------------
  "/img/feed",      -> 
  "/img/cuddle",    -> 
  "/why",           -> 
  "/cat",           -> 
  "/owoify",        -> 
  "/8ball",         -> 
  "/fact",          -> 
  "/chat",          -> 
  "/img/ngif",      -> 
  "/img/kemonomimi",-> 
  "/img/holo",      -> 
  "/img/smug",      -> 
  "/img/baka";      -> 
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
