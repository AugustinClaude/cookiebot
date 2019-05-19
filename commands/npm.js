/* eslint-disable no-inner-declarations */
const Command = require("../../modules/Command.js");
const Discord = require("discord.js");
const snek = require("snekfetch");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (bot, message, args) => {
  moment.locale("fr");

  if (!args[0]) return message.channel.send("Vous devez indiquer un module !");
  const query = args.join(" ");

  try {
    const { body } = await snek.get(
      `https://registry.npmjs.com/${query.toLowerCase()}`
    );
    // Get the latest version by the dist-tags.
    const version = body.versions[body["dist-tags"].latest];
    // Get and check for any dependencies.
    let deps = version.dependencies ? Object.keys(version.dependencies) : null;
    // Grab the list of maintainers.
    let maintainers = body.maintainers.map(user => user.name);
    const github = version.repository.url;
    const gitshort = github.slice(23, -4);

    // If there's more than 10 maintainers, we want to truncate them down.
    if (maintainers.length > 10) {
      const len = maintainers.length - 10;
      maintainers = maintainers.slice(0, 10);
      maintainers.push(`...${len} more.`);
    }

    // Same with the dependencies.
    if (deps && deps.length > 10) {
      const len = deps.length - 10;
      deps = deps.slice(0, 10);
      deps.push(`...${len} more.`);
    }

    // Now we just need to present the data to the end user.
    const embed = new Discord.RichEmbed()
      .setColor(0xcb3837)
      .setAuthor(
        `${body.name} | Package Information`,
        "https://i.imgur.com/ErKf5Y0.png"
      )
      .setThumbnail("https://i.imgur.com/8DKwbhj.png")
      .addField(
        "● Description",
        `${version.description || "No description."}\n\u200B`
      )
      .addField("● Version", `${body["dist-tags"].latest}`, true)
      .addField("● Author", `${body.author.name}`, true)
      .addField(
        "● Modification Date",
        `${moment(new Date(body.time.modified)).format("L à LT")}`,
        true
      )
      .addField(
        "● Creation Date",
        `${moment(new Date(body.time.created)).format("L à LT")}`,
        true
      )
      .addField("● License", `${body.license}\n\u200B`, true)
      .addField(
        "● Dependencies",
        `${deps && deps.length ? deps.join(", ") : "Aucune"}\n\u200B`,
        true
      )
      .addField("● Maintainers", maintainers.join(", "))
      .addField(
        "● NPMjs Package",
        `[https://www.npmjs.com/package/${query.toLowerCase()}](https://www.npmjs.com/package/${query.toLowerCase()})`
      )
      .addField(
        "● Github Repository",
        `[https://www.github.com/${gitshort}](https://www.github.com/${gitshort})`
      );

    message.channel.send({ embed });
  } catch (error) {
    if (error.status == 404)
      return message.reply(
        "Une erreur s'est produite lors de la récupération des informations de ce module npm"
      );
    console.log(error);
    return message.reply("Aucun résultat n'a été trouvé !");
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "npm"
};
