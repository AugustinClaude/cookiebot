const Discord = require("discord.js");
var steam = require("steam-provider");
var provider = new steam.SteamProvider();

exports.run = (bot, message, args) => {
  message.delete();

  const game = args.join(" ");
  const steampng =
    "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png";

  if (!game)
    return message.reply(
      "Please provide the name of a steam game. Example: `<steam portal 2`"
    );

  provider.search(game).then(result => {
    provider.detail(result[0].id, "french", "fr").then(results => {
      var initial_price = `${results.priceData.initialPrice}€`;
      if (initial_price == "0.0€") initial_price = "Free";

      var final_price = `${results.priceData.finalPrice}€`;
      if (final_price == "0.0€") final_price = "Free";

      if (final_price !== initial_price)
        initial_price = `~~${results.priceData.initialPrice}€~~`;

      if (final_price == initial_price) final_price = ":x:";

      var metacritic_score = `${results.otherData.metacriticScore}%`;
      if (metacritic_score == "null%")
        metacritic_score = ":x: No Metacritic Score";

      const embed = new Discord.RichEmbed()
        .setAuthor("Steam Store", steampng)
        .setColor("#0059F2")
        .setTitle(`${result[0].name}`)
        .addBlankField()
        .setThumbnail(results.otherData.imageUrl)
        .addField("🆔 Game ID", result[0].id, true)
        .addField("📋 Genres", results.genres, true)
        .addBlankField()
        .addField(
          "💰 Prices",
          `● Normal Price : **${initial_price}**\n● Reduced Price : **${final_price}** `,
          true
        )
        .addField("💻 Platforms", results.otherData.platforms, true)
        .addBlankField()
        .addField("✅ Metacritic Score", metacritic_score, true)
        .addField("🔘 Tags", results.otherData.features, true)
        .addBlankField()
        .addField("🚀 Developer", results.otherData.developer, true)
        .addField("📜 Publisher", results.otherData.publisher, true)
        .addBlankField()
        .addField(
          "🔗 Link",
          `https://store.steampowered.com/app/${result[0].id}`,
          true
        )
        .setFooter(bot.user.username + " ©", bot.user.displayAvatarURL);

      message.channel.send(embed).catch(e => {
        message.reply(
          "An error has occured :\n `" + game + "` was not found !"
        );
        console.error(e);
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
