const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== "302901933419790347") {
    return message.reply(
      ":x: Seul le créateur du bot peut utiliser cette commande !"
    );
  }

  if (!args[0]) {
    return message.channel.send(
      "Syntaxe incorrecte !\nUtilisez : <gamestatus [] | [] | []"
    );
  }

  if (args[0] === "default") {
    setInterval(async () => {
      const statuslist = [
        `<help | ${bot.guilds.size} guilds`,
        `<help | ${bot.channels.size} channels`,
        `<help | ${bot.users.size} users`
      ];
      const random = Math.floor(Math.random() * statuslist.length);

      try {
        await bot.user.setPresence({
          game: {
            name: `${statuslist[random]}`,
            type: "PLAYING"
            //url: 'https://www.twitch.tv/spokloo'
          },
          status: "online"
        });
      } catch (error) {
        console.error(error);
      }
    }, 10000);
  } else {
    try {
      await bot.user.setPresence({
        game: {
          name: `${args
            .join(" ")
            .split(" | ")
            .slice(0, 1)}`,
          type: `${args
            .join(" ")
            .split(" | ")
            .slice(1)}`
        },
        status: `${args
          .join(" ")
          .split(" | ")
          .slice(2)}`
      });
    } catch (e) {
      console.error(e);
      return message.channel.send(
        "Une erreur s'est produite, veuillez réessayer !"
      );
    }
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["game"],
  permLevel: 0
};

module.exports.help = {
  name: "gamestatus"
};
