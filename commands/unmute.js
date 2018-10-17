const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
  message.delete();
  moment.locale("fr");

  if (message.member.hasPermission("MANAGE_MESSAGES")) {
    const muteRole = message.guild.roles.find("name", "🚫 Mute 🚫");
    const member = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );

    if (!member)
      return message.channel.send(
        "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur !"
      );

    if (!member.roles.find("name", "🚫 Mute 🚫"))
      return message.channel.send(
        `❌ ${member.user.username}, n'est pas mute!`
      );

    member.removeRole(muteRole.id);
    message.channel.send(`🔊 ${member.user.username}, est maintenant unmute !`);

    const unmuteEmbed = new Discord.RichEmbed()
      .setTitle("❌ UnMutes")
      .setColor("#F02A2A")
      .addField("⛔️ Membre unmute", `${member} (ID: ${member.id})`)
      .addField("🌀 Unmute par", `${message.author} (ID: ${message.author.id})`)
      .addField("🕑 Unmute le", moment(message.createdAt).format("LLL"))
      .addField("💬 Channel", message.channel);

    const unmuteChannel = message.guild.channels.find("name", "logs");

    if (!unmuteChannel) {
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

    unmuteChannel.send(unmuteEmbed);
  } else {
    message.reply(
      "Vous n'avez pas les permissions pour éxécuter cette commande !"
    );
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["um"],
  permLevel: 0
};

module.exports.help = {
  name: "unmute"
};
