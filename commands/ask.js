const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) return message.reply("🎱 Vous ne m'avez pas posé question !");
  if (args.join(" ") === "Quel est la réponse de la vie ?") {
    const replies2 = [
      "🎱 C'est simple, c'est 42 !",
      "🎱 Hmm... Si je me rappelle bien, c'est 42 !",
      "🎱 Demande à Google ! : https://bit.ly/2xJy3nW",
      "🎱 Hum... C'est embarrassant... Je ne sais pas... Demandons à Mr.Calculatrice !\n<Mr.Calculatrice> 'réponse de la vie' = 42"
    ];
    const result2 = Math.floor(Math.random() * replies2.length);
    return message.channel.send(replies2[result2]);
  }

  const replies = [
    "🎱 D'après moi, oui",
    "🎱 C'est certain !",
    "🎱 Oui absolument !",
    "🎱 Tu peux compter dessus",
    "🎱 Sans aucuns doutes",
    "🎱 Très probable",
    "🎱 Oui",
    "🎱 C'est bien parti !",
    "🎱 C'est non",
    "🎱 Peu probable",
    "🎱 Faut pas rêver !",
    "🎱 N'y compte pas",
    "🎱 Impossible",
    "🎱 Essaye plus tard",
    "🎱 Essaye encore",
    "🎱 Pas d'avis",
    "🎱 Reformule ta question",
    "🎱 Je suis 100% d'accord avec toi",
    "🎱 Je ne sais pas",
    "🎱 Je vais réfléchir, je te répond l'année prochaine !",
    "🎱 Une erreur s'est produite et il m'est impossible de répondre à ta question !",
    "🎱 Ma base de données n'a pas trouvé de réponse à cette question",
    "🎱 Mon maître ne veut pas que je réponde à cette question",
    "🎱 Demande à quelqu'un d'autre, je suis fatigué pour le moment",
    "🎱 Ta question contient un virus, je ne veux pas prendre de risque à y répondre",
    "🎱 Je ne prendrais même pas la peine de répondre à ta question",
    "🎱 Je me demandais la même chose .-.",
    "🎱 Demande à Google, il est ton ami \\:)",
    "🎱 Toutafé",
    "🎱 Mouais euh, j'ai la flemme de répondre, on se fait ça demain ?",
    "🎱 Je te rackette des cookies et tu me reposes ta question, ça marche ?",
    "🎱 Cette réponse est payante (5🍪)",
    "🎱 Bonne question",
    "🎱 ...",
    "🎱 Pose une question intelligente s'il te plaît",
    "🎱 あなたの質問がわかりません",
    "🎱 Error 404",
    "🎱 Je te réponds tout à l'heure, je finis ma série Netflix",
    "🎱 Certes",
    "🎱 Abadakor",
    "🎱 Ta question est d'une intelligence hors du commun, c'est pour cela que pour répondre à ta question je vais devoir demander à Yahoo",
    "🎱 Tu as réfléchi avant de poser ta question ?",
    "🎱 Je ne pense pas",
    "🎱 Je te retourne la question",
    "🎱 Veuillez reposer votre question dans 9..9.. 9. . 9... 9..  99 ..9 9...9... ERROR SYSTEM",
    "🎱 C'est ton destin",
    "🎱 Le sort en est jeté !",
    "🎱 Une chance sur deux !",
    "🎱 Repose ta question",
    "🎱 Peut-être, à revoir"
  ];
  //let ask = args.slice(0).join(" ");
  const result = Math.floor(Math.random() * replies.length);

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
