const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  message.delete();
  if (message.author.id !== "302901933419790347")
    return message.channel.send(
      ":x: Cette commande est réservée au créateur du bot !"
    );

  if (!args[0])
    return message.reply(
      "Veuillez préciser le nom d'une commande en **.js**. Exemple : <cmd [fichier.js]"
    );

  const file = `\`\`<${args[0].slice(0, -3)}\`\``;

  try {
    var cmd = fs.readFileSync(`./commands/${args[0]}`);
    await message.channel.send(
      `📥 Voici la nouvelle commande ${file} !\n\`\`\`js\n${cmd}\n\`\`\``
    );
    message.delete(500);
  } catch (e) {
    message.reply(
      "Une erreur est survenue ! Sois le nom du fichier en .js est incorrect, sois le fichier est trop volumineux, sois la syntaxe est incorrecte !\n **Syntaxe :** <cmd [fichier.js]"
    );
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["command"],
  permLevel: 0
};

module.exports.help = {
  name: "cmd"
};
