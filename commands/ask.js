const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) return message.reply("🎱 Vous ne m'avez pas posé question !");
  if (args.join(" ") === "Quel est la réponse de la vie ?") {
    const replies2 = ["🎱 C'est simple, c'est 42 !", "🎱 Hmm... Si je me rappelle bien, c'est 42 !", "🎱 Demande à google ! : https://bit.ly/2xJy3nW", "🎱 Hum... C'est embarrassant... Je ne sais pas... Demandons à Mr.Calculatrice !\n<Mr.Calculatrice> 'réponse de la vie' = 42"];
    const result2 = Math.floor((Math.random() * replies2.length));
    return message.channel.send(replies2[result2]);
  }
    
  const replies = ["🎱 D'après moi, oui", "🎱 C'est certain !", "🎱 Oui absolument !", "🎱 Tu peux compter dessus", "🎱 Sans aucun doutes", "🎱 Très probable", "🎱 Oui", "🎱 C'est bien parti !", "🎱 C'est non", "🎱 Peu probable", "🎱 Faut pas rêver !", "🎱 N'y compte pas", "🎱 Impossible", "🎱 Essaye plus tard", "🎱 Essaye encore", "🎱 Pas d'avis", "🎱 C'est ton destin", "🎱 Le sort en est jeté !", "🎱 Une chance sur deux !", "🎱 Repose ta question", "🎱 Peut-être, à revoir"];
  //let ask = args.slice(0).join(" ");
  const result = Math.floor((Math.random() * replies.length));

  /*let askEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor('#0000BD')
        .setFooter(bot.user.username + ' ©', bot.user.displayAvatarURL)
        .setTimestamp()
        .addField("Question", ask)
        .addField("Réponse", replies[result])*/

  message.channel.send(replies[result]);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["8ball", "8b"],
  permLevel: 0
};

module.exports.help = {
  name: "ask"
};