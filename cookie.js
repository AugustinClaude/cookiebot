const Discord = require("discord.js");
const bot = new Discord.Client();

const prefix = "c!";
bot.login("NTE5NTU3NjI3MTM5NzE5MTc4.DuhDkA.6tnFsDzKvM3w2h8aGVqO8ifiSlE");

bot.on("ready", async () => {
  console.log(`${bot.user.username} est en ligne !`);
});

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "game") {
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
      return message.channel.send(
        "Le message de jeu a été changé en `default` avec succès !"
      );
    } else {
      try {
        await bot.user.setPresence({
          game: {
            name: `${args.join(" ")}`,
            type: "PLAYING"
          },
          status: "online"
        });

        return message.channel.send(
          `Le message de jeu a été changé en \`${args.join(
            " "
          )}\` avec succès !`
        );
      } catch (e) {
        console.error(e);
        return message.channel.send(
          "Une erreur s'est produite, veuillez réessayer !"
        );
      }
    }
  }
});
