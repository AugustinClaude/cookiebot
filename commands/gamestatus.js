module.exports.run = async (bot, message, args) => {
  message.delete();
  if (message.author.id !== "302901933419790347") {
    return message.reply(
      ":x: Seul le créateur du bot peut utiliser cette commande !"
    );
  }

  if (!args[0]) {
    return message.channel.send(
      "Syntaxe incorrecte !\nUtilisez : <gamestatus [status]"
    );
  }

  if (args[0] === "default") {
    try {
      await bot.user.setPresence({
        game: {
          name: "<help",
          type: "PLAYING"
          //url: 'https://www.twitch.tv/spokloo'
        },
        status: "online"
      });
    } catch (error) {
      console.error(error);
    }
    return message.channel
      .send("Le message de jeu a été changé en `default` avec succès !")
      .then(msg => msg.delete(5000));
  } else {
    var game;
    var state = true;
    if (args[0] === "true" || state == true) {
      state = true;
      game = "<help | ";
    } else if (args[0] === "false") {
      state = false;
      game = "";
    } else {
      try {
        await bot.user.setPresence({
          game: {
            name: `${game}${args.join(" ")}`,
            type: "PLAYING"
          },
          status: "online"
        });

        return message.channel
          .send(
            `Le message de jeu a été changé en \`${game}${args.join(
              " "
            )}\` avec succès !`
          )
          .then(msg => msg.delete(5000));
      } catch (e) {
        console.error(e);
        return message.channel.send(
          "Une erreur s'est produite, veuillez réessayer !"
        );
      }
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
