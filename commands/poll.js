const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  if (!args[0]) return message.channel.send("Syntaxe : <poll 'Question'");

  const pollEmbed = new Discord.RichEmbed()
    .setTitle(`❔ Sondage créé par ${message.author.username} ❔`)
    .setColor("#3ac5a9")
    //.setFooter("✅ Appuyez sur l'une des réactions ci-dessous ❌")
    .addField(
      "📖 " + args.join(" "),
      "<:tickyes:556584581109907456> Appuyez sur l'une des réactions ci-dessous <:tickno:556584581323685918>"
    )
    .setFooter("Ceci est un prototype, à améliorer dans le futur!")
    .setTimestamp();

  const msg = await message.channel.send(pollEmbed);
  await msg.react("<:tickyes:556584581109907456>");
  await msg.react("<:tickno:556584581323685918>");
  await msg.react("<:tickneutral:556584581101256764>");
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sondage"],
  permLevel: 0
};

module.exports.help = {
  name: "poll"
};
