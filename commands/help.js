const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  /*.addField(
      "⚙️ Utile",
      "``- <help / <aide`` : Affiche la liste des commandes\n``- <invite / <support / <infobot / <ib`` : Affiche des informations à propos du bot et quelques liens d'invitation\n``- <avatar / <a [@member]`` : Affiche l'avatar d'une personne mentionnée\n``- <icon / <i`` : Affiche l'icône du serveur\n``- <level / <lvl / <rank`` : Affiche vos niveaux d'expérience\n``- <ping`` : Affiche la latence du serveur (ping) | Pong!\n``- <userinfo / <ui`` : Affiche des informations à propos d'un joueur mentionné\n``- <info / <infoserv / <is`` : Affiche des informations à propos du serveur\n``- <membercount / <mc`` : Affiche en détails le nombre de membres\n``- <poll / <sondage [Question]`` : Permet de créer un sondage\n``- <anime [recherche]`` : Recherche un anime\n``- <manga [recherche]`` : Recherche un manga\n``- <doc / <discord.js [recherche]`` : Recherche sur la documentation de discord.js (Dev de bots discord)\n``- <google / <ggl [recherche]`` : Lance une recherche Google\n``- <youtube / <yt [recherche]`` : Lance une recherche YouTube\n``- <wikipedia / <wiki [recherche]`` : Lance une recherche Wikipédia"
    )
    .addBlankField()
    .addField(
      "🎉 Fun",
      "``- <fight / <combat`` : Démarre un combat entre vous et un utilisateur mentionné\n``- <justeprix / <jp`` : Démarre une partie de Juste Prix\n``- <roulette / <rr`` : Lance une partie de roulette russe\n``- <vdm`` : Une VDM intéressante, ou pas\n``- <coinflip / <cf`` : Pile ou Face ?\n``- <ask / <8ball / <8b`` : Pose moi ta question ^_^\n``- <say`` : Fais moi parler ! :D"
    )
    .addBlankField()
    .addField(
      "🎵 Musique",
      "``- <play [URL YouTube]`` : Lance une musique via une URL YouTube\n``- <stop / <leave`` : Arrête la musique\n``- <join`` : Rejoins un channel vocal\n``- <pause`` : Met la musique en pause\n``- <resume`` : Remet la musique en marche\n``- <nowplaying / <np`` : Infos à propos de la musique qui est jouée\n``- <skip / <next`` : Skip une musique"
    )
    .addBlankField()
    .addField(
      "🖼 Images",
      "``- <cat / <chat`` : Photo et gifs de chat!\n``- <dog / <chien`` : Photo de chien!\n``- <lizard / lezard`` : Photo de lézard!\n``- <hug [@member]`` : Fais un calin à une personne :3\n``- <slap [@member]`` : Frappe une personne ! Ce n'est pas très gentil !\n``- <tickle [@member]`` : Chatouille une personne ! La pauvre ;)\n``- <insult / <baka [@member]`` : Insulte une personne ! P'tit clash :D\n``- <kiss [@member]`` : Embrasse une personne ! Trop mignon <3\n``- <feed [@member]`` : Donne à manger à une personne ! C'est très gentil !\n``- <cuddle [@member]`` : Réconforte une personne !\n``- <poke [@member]`` : Poke une personne !\n``- <pat / <caress [@member]`` : Caresse une personne !"
    )
    .addBlankField()
    .addField(
      "📛 Modération",
      "``- <prefix [new prefix]`` : Change le prefix actuel par un autre\n``- <kick [@member] [Raison]`` : Kick un utilisateur mentionné\n``- <ban [@member] [Raison]`` : Ban un utilisateur mentionné\n``- <unban [ID]`` : Unban l'ID d'un utilisateur banni\n``- <tempban / <tb [@membre] [durée] [raison]`` : Tempban un utilisateur mentionné\n``- <mute [@member] [Durée]`` : Mute un utilisateur mentionné\n``- <unmute / <um [@member]`` : Unmute un utilisateur mute\n``- <report [@member] [Raison]`` : Report un utilisateur mentionné\n``- <clear / <purge [Nb msg]`` : Clear un nombre défini de messages\n``- <cmd / <command [fichier.js]`` : Affiche le code source d'une commande en .js"
    )
*/

  var help_embed = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.displayAvatarURL)
    .setColor("#0059F2")
    .setTitle("🔧 Voici la liste des commandes !")
    .addField(
      "⚙️ Utile",
      "``- <help / <aide``\n``- <invite / <support / <infobot / <ib``\n``- <avatar / <a [@member]``\n``- <icon / <i``\n``- <steam [name of a steam game]``\n``<emoji / <emojis / <e``\n``- <level / <lvl / <rank``\n``- <ping``\n``- <userinfo / <ui``\n``- <info / <infoserv / <is``\n``- <membercount / <mc``\n``- <poll / <sondage [Question]``\n``- <anime [recherche]``\n``- <manga [recherche]``\n``<weather [Ville]``\n``- <doc / <discord.js [recherche]``\n``- <google / <ggl [recherche]``\n``- <youtube / <yt [recherche]``\n``- <wikipedia / <wiki [recherche]``"
    )
    .addBlankField()
    .addField(
      "🎉 Fun",
      "``- <fight / <combat``\n``- <justeprix / <jp``\n``- <roulette / <rr``\n``- <vdm``\n``- <coinflip / <cf``\n``- <ask / <8ball / <8b``\n``- <say``"
    )
    .addBlankField()
    .addField(
      "🎵 Musique",
      "``- <play [URL YouTube]``\n``- <stop / <leave``\n``- <join``\n``- <pause``\n``- <resume``\n``- <nowplaying / <np``\n``- <skip / <next``"
    )
    .addBlankField()
    .addField(
      "🖼 Images",
      "``- <cat / <chat``\n``- <dog / <chien``\n``- <lizard / <lezard``\n``- <hug [@member]``\n``- <slap [@member]``\n``- <tickle [@member]``\n``- <insult / <baka [@member]``\n``- <kiss [@member]``\n``- <feed [@member]``\n``- <cuddle [@member]``\n``- <poke [@member]``\n``- <pat / <caress [@member]``"
    )
    .addBlankField()
    .addField(
      "📛 Modération",
      "``- <prefix [new prefix]``\n``- <kick [@member] [Raison]``\n``- <ban [@member] [Raison]``\n``- <unban [ID]``\n``- <tempban / <tb [@membre] [durée] [raison]``\n``- <mute [@member] [Durée] [raison]``\n``- <unmute / <um [@member]``\n``- <report [@member] [Raison]``\n``- <clear / <purge [Nb msg]``\n``- <cmd / <command [fichier.js]``\n``- <raidmode / <rm``"
    )
    .setFooter(
      "Ce bot a été créé par Spokloo#7791",
      "https://i.imgur.com/C7cjSEe.png"
    )
    .setTimestamp(bot.user.createdAt)
    .setThumbnail(bot.user.displayAvatarURL);
  try {
    await message.author.send(help_embed);
    message.reply("La liste des commandes vous a été envoyée en privé !");
  } catch (e) {
    message.reply(
      "Vous avez désactivé vos messages privé, je me vois dans l'obligation de poster la liste des commandes dans ce channel !"
    );
    message.channel.send(help_embed);
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
