const Discord = require("discord.js");
var steam = require("steam-provider");
var provider = new steam.SteamProvider();

exports.run = (client, message, args) => {
  const game = args[0];
  const steampng =
    "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png";
  if (!game)
    return message.reply(
      "Please provide the name of a steam game. Example: `<steam portal 2`"
    );

  provider.search(game).then(result => {
    provider.detail(result[0].id, "french", "fr").then(results => {
      console.log(results);
      const embed = new Discord.RichEmbed()
        .setAuthor("Steam Store", steampng)
        .setColor("#0059F2")
        .setTitle(result[0].name)
        .addField("Game ID", result[0].id)
        .setThumbnail(results.otherData.imageUrl)
        .addField("Types", results.genres)
        .addField(
          "Prices",
          `Normal Price **${results.priceData.initialPrice}**€
Reduced Price **${results.priceData.finalPrice}**€ `,
          true
        )
        .addField("Platform", results.otherData.platforms, true)
        .addField("Metacritic Score", results.otherData.metacriticScore, true)
        .addField("Features", results.otherData.features, true)
        .addField("Developer", results.otherData.developer, true)
        .addField("Publisher", results.otherData.publisher);

      message.channel.send(embed).catch(e => {
        console.log(e);
        message.reply(
          "An error has occured :\n `" + game + "` was not found !"
        );
      });
    });
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "steam"
};
