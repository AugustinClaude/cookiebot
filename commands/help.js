const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();

  var menuEmbed = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.displayAvatarURL)
    .setColor("#ffcc00")
    .setThumbnail(bot.user.displayAvatarURL)
    .setTitle("🔧 Voici la liste des catégories de commandes !")
    .setDescription(
      "``<help`` fait apparaître ce menu. Vous pouvez rajouter l'argument `here` tout à la fin pour afficher les menus d'aide sur le channel actuel."
    )
    .addField("⚙️ Utile", "``<help use``", true)
    .addField("🎉 Fun", "``<help fun``", true)
    .addField("🎵 Musique", "``<help music``", true)
    .addField("🖼 Images", "``<help image``", true)
    .addField("📛 Modération", "``<help mod``", true)
    .setFooter(
      "Ce bot a été créé par Spokloo#7791",
      "https://i.imgur.com/C7cjSEe.png"
    );

  var useEmbed = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.displayAvatarURL)
    .setColor("#88eef7")
    .setThumbnail(bot.user.displayAvatarURL)
    .addField(
      "⚙️ Utile",
      "``<help / <aide``\n``<invite / <support / <infobot / <ib``\n``<math / <maths / <calcul [expression]``\n``<exembed / <embedex``\n``<mp / <message / <msg [message]``\n``<random / <rdm``\n``<id``\n``<realname / <rname / <rn [@member]``\n``<avatar / <a [@member]``\n``<icon / <i``\n``<steam [name of a steam game]``\n``<todo / <remind / <reminder / <remindme [temps] [chose à se rappeler]``\n``<emoji / <emojis / <e``\n``<level / <lvl / <rank``\n``<leaderboard / <lead / <lb``\n``<ping``\n``<stats / <stat``\n``<userinfo / <ui``\n``<info / <infoserv / <is / <si``\n``<membercount / <mc``\n``<rolecount / <rcount / <rc [nom de rôle]``\n``<poll / <sondage [Question]``\n``<anime [recherche]``\n``<manga [recherche]``\n``<weather [Ville]``\n``<doc / <discord.js [recherche]``\n``<google / <ggl [recherche]``\n``<youtube / <yt [recherche]``"
    )
    .setFooter(
      "Ce bot a été créé par Spokloo#7791",
      "https://i.imgur.com/C7cjSEe.png"
    );

  var funEmbed = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.displayAvatarURL)
    .setColor("#6600cc")
    .setThumbnail(bot.user.displayAvatarURL)
    .addField(
      "🎉 Fun",
      "``<cookie [@member]``\n``<fight / <combat``\n``<justeprix / <jp``\n``<roulette / <rr``\n``<vdm``\n``<coinflip / <cf``\n``<ask / <8ball / <8b``\n``<say``"
    )
    .setFooter(
      "Ce bot a été créé par Spokloo#7791",
      "https://i.imgur.com/C7cjSEe.png"
    );

  var musicEmbed = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.displayAvatarURL)
    .setColor("#0059F2")
    .setThumbnail(bot.user.displayAvatarURL)
    .addField(
      "🎵 Musique",
      "``<play [URL YouTube]``\n``<stop / <leave``\n``<join``\n``<pause (not working)``\n``<resume (not working)``\n``<nowplaying / <np (not working)``\n``<skip / <next (not working)``"
    )
    .setFooter(
      "Ce bot a été créé par Spokloo#7791",
      "https://i.imgur.com/C7cjSEe.png"
    );

  var imageEmbed = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.displayAvatarURL)
    .setColor("#33cc33")
    .setThumbnail(bot.user.displayAvatarURL)
    .addField(
      "🖼 Images",
      "``<cat / <chat``\n``<dog / <chien``\n``<lizard / <lezard``\n``<hug [@member]``\n``<slap [@member]``\n``<tickle [@member]``\n``<insult / <baka [@member]``\n``<kiss [@member]``\n``<feed [@member]``\n``<cuddle [@member]``\n``<poke [@member]``\n``<pat / <caress [@member]``"
    )
    .setFooter(
      "Ce bot a été créé par Spokloo#7791",
      "https://i.imgur.com/C7cjSEe.png"
    );

  var modEmbed = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.displayAvatarURL)
    .setColor("#ff3300")
    .setThumbnail(bot.user.displayAvatarURL)
    .addField(
      "📛 Modération",
      "``<prefix [new prefix]``\n``<kick [@member] [Raison]``\n``<ban [@member] [Raison]``\n``<unban [ID]``\n``<tempban / <tb [@member] [durée] [raison]``\n``<mute [@member] [Durée] [raison]``\n``<unmute / <um [@member]``\n``<report [@member] [Raison]``\n``<clear / <purge [Nb msg]``\n``<cmd / <command [fichier.js]``\n``<cleanlb / <purgelb``\n``<addrole / <arole [@member] [role]``\n``<removerole / <rrole [@member] [role]``\n``<raidmode / <rm (WIP)``\n``<shutdown / <sd / <stop / <reload``"
    )
    .setFooter(
      "Ce bot a été créé par Spokloo#7791",
      "https://i.imgur.com/C7cjSEe.png"
    );

  if (args[0] === "here") {
    return message.channel.send(menuEmbed);
  }

  if (args.join(" ") === "use here") {
    return message.channel.send(useEmbed);
  } else if (args[0] === "use") {
    try {
      await message.author.send(useEmbed);
      return message.reply(
        "La catégorie des commandes utiles vous a été envoyée en privé !"
      );
    } catch (e) {
      message.reply(
        "Vous avez désactivé vos messages privé, je me vois dans l'obligation de poster la catégorie des commandes utiles dans ce channel !"
      );
      return message.channel.send(useEmbed);
    }
  }

  if (args.join(" ") === "fun here") {
    return message.channel.send(funEmbed);
  } else if (args[0] === "fun") {
    try {
      await message.author.send(funEmbed);
      return message.reply(
        "La catégorie des commandes fun vous a été envoyée en privé !"
      );
    } catch (e) {
      message.reply(
        "Vous avez désactivé vos messages privé, je me vois dans l'obligation de poster la catégorie des commandes fun dans ce channel !"
      );
      return message.channel.send(funEmbed);
    }
  }

  if (args.join(" ") === "music here") {
    return message.channel.send(musicEmbed);
  } else if (args[0] === "music") {
    try {
      await message.author.send(musicEmbed);
      return message.reply(
        "La catégorie des commandes de musique vous a été envoyée en privé !"
      );
    } catch (e) {
      message.reply(
        "Vous avez désactivé vos messages privé, je me vois dans l'obligation de poster la catégorie des commandes de musique dans ce channel !"
      );
      return message.channel.send(musicEmbed);
    }
  }

  if (args.join(" ") === "image here") {
    return message.channel.send(imageEmbed);
  } else if (args[0] === "image") {
    try {
      await message.author.send(imageEmbed);
      return message.reply(
        "La catégorie des commandes d'images vous a été envoyée en privé !"
      );
    } catch (e) {
      message.reply(
        "Vous avez désactivé vos messages privé, je me vois dans l'obligation de poster la catégorie des commandes d'images dans ce channel !"
      );
      return message.channel.send(imageEmbed);
    }
  }

  if (args.join(" ") === "mod here") {
    return message.channel.send(modEmbed);
  } else if (args[0] === "mod") {
    try {
      await message.author.send(modEmbed);
      return message.reply(
        "La catégorie des commandes de modération vous a été envoyée en privé !"
      );
    } catch (e) {
      message.reply(
        "Vous avez désactivé vos messages privé, je me vois dans l'obligation de poster la catégorie des commandes de modération dans ce channel !"
      );
      return message.channel.send(modEmbed);
    }
  }

  try {
    await message.author.send(menuEmbed);
    message.reply("La liste des commandes vous a été envoyée en privé !");
  } catch (e) {
    message.reply(
      "Vous avez désactivé vos messages privé, je me vois dans l'obligation de poster la liste des commandes dans ce channel !"
    );
    message.channel.send(menuEmbed);
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
