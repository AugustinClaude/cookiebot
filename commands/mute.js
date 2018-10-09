const Discord = require("discord.js");
const ms = require("ms");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
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
    .addField("💬 Channel", message.channel);

  const muteChannel = message.guild.channels.find("name", "logs");

  if (!muteChannel) {
    return message.channel.send(
      ":x: Channel **'logs'** introuvable. Veuillez créer ce channel avant de pouvoir mute quelqu'un !"
    );
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
