const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
  message.delete();
  const bannedUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  moment.locale("fr");

  if (!bannedUser) {
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur !"
    );
  }

  let banReason = args.join(" ").slice(22);

  if (Number.isInteger(parseInt(args[0]))) {
    banReason = args.join(" ").slice(19);
  }

  if (!banReason) {
    return message.reply("Merci de préciser une raison!");
  }

  if (!message.member.hasPermission("MANAGE_MESSAGES", "BAN_MEMBERS")) {
    return message.reply(
      "Vous n'avez pas les permissions pour exécuter cette commande !"
    );
  }

  if (bannedUser.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR")) {
    return message.reply("Vous ne pouvez pas ban cette personne !");
  }

  const banEmbed = new Discord.RichEmbed()
    .setTitle("❌ Bans")
    .setColor("#F02A2A")
    .addField("⛔️ Membre banni", `${bannedUser} (ID: ${bannedUser.id})`)
    .addField("🌀 Banni par", `${message.author} (ID: ${message.author.id})`)
    .addField("🕑 Ban le", moment(message.createdAt).format("LLL"))
    .addField("💬 Channel", message.channel)
    .addField("❓ Raison", banReason);

  const banChannel = message.guild.channels.find("name", "logs");

  if (!banChannel) {
    message.channel
      .send(":x: Channel **'logs'** introuvable.")
      .then(msg => msg.delete(3000));

    await wait(3500);

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

  message.guild.member(bannedUser).ban(banReason);
  banChannel.send(banEmbed);
  message.channel.send(`${bannedUser} a été banni avec succès !`);
  bannedUser.send(
    `Vous avez été banni du serveur \`\`${message.guild.name}\`\`.`
  );
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "ban"
};
