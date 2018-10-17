const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
  const kickedUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  moment.locale("fr");

  if (!kickedUser) {
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur !"
    );
  }

  const kickedReason = args.join(" ").slice(22);

  if (!kickedReason) {
    return message.reply("Merci de préciser une raison!");
  }

  if (!message.member.hasPermission("MANAGE_MESSAGES", "KICK_MEMBERS")) {
    return message.reply(
      "Vous n'avez pas les permissions pour exécuter cette commande !"
    );
  }

  if (kickedUser.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR")) {
    return message.reply("Vous ne pouvez pas kick cette personne !");
  }

  const kickedEmbed = new Discord.RichEmbed()
    .setTitle("❌ Kicks")
    .setColor("#F02A2A")
    .addField("⛔️ Membre kické", `${kickedUser} (ID: ${kickedUser.id})`)
    .addField("🌀 Kick par", `${message.author} (ID: ${message.author.id})`)
    .addField("🕑 Kick le", moment(message.createdAt).format("LLL"))
    .addField("💬 Channel", message.channel)
    .addField("❓ Raison", kickedReason);

  const kickChannel = message.guild.channels.find("name", "logs");

  if (!kickChannel) {
    message.channel
      .send(":x: Channel **'logs'** introuvable.")
      .then(msg => msg.delete(2000));

    const m = await message.channel.send("Création du channel **'logs'**...");

    setTimeout(() => {
      message.guild.createChannel("logs", "text", [
        {
          id: message.guild.id,
          deny: ["SEND_MESSAGES", "ADD_REACTIONS"],
          allow: ["READ_MESSAGE_HISTORY", "VIEW_CHANNEL"]
        }
      ]);
      m.edit("✅ Channel **'logs'** créé avec succès !").then(msg =>
        msg.delete(3000)
      );
    }, 5000);
  }

  message.delete();
  message.guild.member(kickedUser).kick(kickedReason);
  kickChannel.send(kickedEmbed);
  message.channel.send(`${kickedUser} a été kick avec succès !`);
  kickedUser.send(
    `Vous avez été kick du serveur \`\`${message.guild.name}\`\`.`
  );
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "kick"
};
