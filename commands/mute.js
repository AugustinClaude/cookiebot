const Discord = require("discord.js");
const ms = require("ms");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
  message.delete();
  moment.locale("fr");

  const mutedUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  if (!mutedUser) {
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur !"
    );
  }

  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message.reply(
      "Vous n'avez pas les permissions pour exécuter cette commande !"
    );
  }

  if (mutedUser.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR")) {
    return message.reply("Vous ne pouvez pas mute cette personne !");
  }

  let muteRole = message.guild.roles.find("name", "🚫 Mute 🚫");
  if (!muteRole) {
    try {
      muteRole = await message.guild.createRole({
        name: "🚫 Mute 🚫",
        color: "#d19025",
        permissions: []
      });
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muteRole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
  }

  const muteTime = args[1];
  if (!muteTime) return message.reply("Merci de préciser la durée du mute");

  const muteReason = args[2];
  if (!muteReason) return message.reply("Merci de précisier la raison du mute");

  await mutedUser.addRole(muteRole.id);
  message.channel.send(
    `🔇 <@${mutedUser.id}> a été mute pour ${ms(ms(muteTime))} !`
  );

  setTimeout(() => {
    mutedUser.removeRole(muteRole.id);
    message.channel.send(`🔊 <@${mutedUser.id}> n'est plus mute !`);
  }, ms(muteTime));

  const muteEmbed = new Discord.RichEmbed()
    .setTitle("❌ Mutes")
    .setColor("#F02A2A")
    .addField("⛔️ Membre mute", `${mutedUser} (ID: ${mutedUser.id})`)
    .addField("🌀 Mute par", `${message.author} (ID: ${message.author.id})`)
    .addField("🕑 Mute le", moment(message.createdAt).format("LLL"))
    .addField("⏳ Durée du mute", ms(ms(muteTime)))
    .addField("💬 Channel", message.channel)
    .addField("❓ Raison", muteReason);

  const muteChannel = message.guild.channels.find("name", "logs");

  if (!muteChannel) {
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

  muteChannel.send(muteEmbed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "mute"
};
