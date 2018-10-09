const Discord = require("discord.js");
const malScraper = require("mal-scraper");

module.exports.run = async (bot, message, args) => {
  /*let args2 = message.content.split(' ')
    args2.shift()
    let anime = ('https://kitsu.io/anime?sort=recent&text=' + args2.join('%20'))
    
    message.reply(anime)*/

  if (!args[0]) return message.reply("Vous n'avez cherché aucun animé ! Syntaxe : <anime [nom d'animé connu]");

  const search = `${args}`;

  malScraper.getInfoFromName(search)
    .then((data) => {
      const malEmbed = new Discord.RichEmbed()
        .setTitle(`📋 Voici les résultats de votre recherche : **__${args}__**`.split(",").join(" "))
        .setThumbnail(data.picture)
        .setColor("RANDOM")
        .addField(":flag_gb: Titre Anglais", data.englishTitle, true)
        .addField(":flag_jp: Titre Japonais", data.japaneseTitle, true)
        .addBlankField()
        .addField("🖥 Genre", data.type, true)
        .addField("🍪 Épisodes", data.episodes, true)
        .addBlankField()
        .addField("⛔ Pegi", data.rating, true)
        .addField("📺 Diffusion", data.aired, true)
        .addBlankField()
        .addField("⭐ Score", data.score, true)
        .addField("✅ Nombre de notes", data.scoreStats, true)
        .addBlankField()
        .addField("🌐 Lien", data.url);

      message.channel.send(malEmbed);
      setTimeout(() => {
        message.channel.send(`-------------------------------------------------------------------------------------\n**Description :**\n ${data.synopsis}`);
      }, 1000);

    });
    
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "anime"
};