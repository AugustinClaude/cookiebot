const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var useEmbed = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.displayAvatarURL)
    .setColor("#88eef7")
    .setThumbnail(bot.user.displayAvatarURL)
    .setTitle("🔧 Voici la liste des commandes !")
    .addField(
      "⚙️ Utile",
      "``- <help / <aide``\n``- <invite / <support / <infobot / <ib``\n``- <random / <rdm``\n``- <id``\n``- <realname / <rname / <rn [@member]``\n``- <avatar / <a [@member]``\n``- <icon / <i``\n``- <steam [name of a steam game]``\n``- <todo / <remind [temps] [chose à se rappeler]``\n``- <emoji / <emojis / <e``\n``- <level / <lvl / <rank``\n``- <leaderboard / <lead / <lb``\n``- <ping``\n``- <userinfo / <ui``\n``- <info / <infoserv / <is``\n``- <membercount / <mc``\n``- <rolecount / <rcount / <rc [nom de rôle]``\n``- <poll / <sondage [Question]``\n``- <anime [recherche]``\n``- <manga [recherche]``\n``- <weather [Ville]``\n``- <doc / <discord.js [recherche]``\n``- <google / <ggl [recherche]``\n``- <youtube / <yt [recherche]``\n``- <wikipedia / <wiki [recherche]``"
    );

  var funEmbed = new Discord.RichEmbed()
    .setColor("#ff00ff")
    .setThumbnail(bot.user.displayAvatarURL)
    .addField(
      "🎉 Fun",
      "``- <cookie [@member]``\n``- <fight / <combat``\n``- <justeprix / <jp``\n``- <roulette / <rr``\n``- <vdm``\n``- <coinflip / <cf``\n``- <ask / <8ball / <8b``\n``- <say``"
    );

  var musicEmbed = new Discord.RichEmbed()
    .setColor("#0059F2")
    .setThumbnail(bot.user.displayAvatarURL)
    .addField(
      "🎵 Musique",
      "``- <play [URL YouTube]``\n``- <stop / <leave``\n``- <join``\n``- <pause``\n``- <resume``\n``- <nowplaying / <np``\n``- <skip / <next``"
    );

  var imageEmbed = new Discord.RichEmbed()
    .setColor("#33cc33")
    .setThumbnail(bot.user.displayAvatarURL)
    .addField(
      "🖼 Images",
      "``- <cat / <chat``\n``- <dog / <chien``\n``- <lizard / <lezard``\n``- <hug [@member]``\n``- <slap [@member]``\n``- <tickle [@member]``\n``- <insult / <baka [@member]``\n``- <kiss [@member]``\n``- <feed [@member]``\n``- <cuddle [@member]``\n``- <poke [@member]``\n``- <pat / <caress [@member]``"
    );

  var modEmbed = new Discord.RichEmbed()
    .setColor("#ff3300")
    .setFooter(
      "Ce bot a été créé par Spokloo#7791",
      "https://i.imgur.com/C7cjSEe.png"
    )
    .setTimestamp(bot.user.createdAt)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField(
      "📛 Modération",
      "``- <prefix [new prefix]``\n``- <kick [@member] [Raison]``\n``- <ban [@member] [Raison]``\n``- <unban [ID]``\n``- <tempban / <tb [@membre] [durée] [raison]``\n``- <mute [@member] [Durée] [raison]``\n``- <unmute / <um [@member]``\n``- <report [@member] [Raison]``\n``- <clear / <purge [Nb msg]``\n``- <cmd / <command [fichier.js]``\n``- <cleanlb / <purgelb``\n``- <addrole / <arole [@member] [role]``\n``- <removerole / <rrole [@member] [role]``\n``- <raidmode / <rm``"
    );

  if (args[0] === "here") {
    message.channel.send(useEmbed);
    message.channel.send(funEmbed);
    message.channel.send(musicEmbed);
    message.channel.send(imageEmbed);
    message.channel.send(modEmbed);
  }

  try {
    await message.author.send(useEmbed);
    message.author.send(funEmbed);
    message.author.send(musicEmbed);
    message.author.send(imageEmbed);
    message.author.send(modEmbed);
    message.reply("La liste des commandes vous a été envoyée en privé !");
  } catch (e) {
    message.reply(
      "Vous avez désactivé vos messages privé, je me vois dans l'obligation de poster la liste des commandes dans ce channel !"
    );
    message.channel.send(useEmbed);
    message.channel.send(funEmbed);
    message.channel.send(musicEmbed);
    message.channel.send(imageEmbed);
    message.channel.send(modEmbed);
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["aide"],
  permLevel: 0
};

module.exports.help = {
  name: "help"
};
