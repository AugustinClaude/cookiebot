const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  if (message.author.id !== "302901933419790347") return message.reply(":x: Vous n'êtes pas le créateur du bot, vous ne pouvez donc pas utiliser cette commande !");
  else {
    const m = await message.channel.send("⚙ Redémarrage en cours");
    setTimeout(() => {
      m.edit("⚙ Redémarrage en cours .");
    }, 500);
    setTimeout(() => {
      m.edit("⚙ Redémarrage en cours . .");
    }, 500);
    setTimeout(() => {
      m.edit("⚙ Redémarrage en cours . . .");
    }, 500);
    setTimeout(() => {
      m.edit("⚙ Redémarrage en cours . .");
    }, 500);
    setTimeout(() => {
      m.edit("⚙ Redémarrage en cours .");
    }, 500);
    setTimeout(() => {
      m.edit("⚙ Redémarrage en cours");
    }, 500);
    
    bot.destroy();
    bot.login(process.env.BOT_TOKEN);

    setTimeout(() => {
      m.edit("⚙ Redémarrage terminé avec succès !");
    }, 3500);
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sd", "stop", "reload"],
  permLevel: 0
};

module.exports.help = {
  name: "shutdown"
};
