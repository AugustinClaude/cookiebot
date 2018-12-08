var raidmode = true;

module.exports.run = async (bot, message, args) => {
  message.delete();

  if (!message.member.hasPermission("MANAGE_GUILD")) {
    return message.channel.send(
      "Vous n'avez pas les permissions pour faire cela !"
    );
  }

  const channelList = 
  const muteRole = message.guild.roles.find(r => r.id == message.guild.id);
  try {
    message.guild.channels.forEach(async (channel, id) => {
      await channel.overwritePermissions(muteRole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
  } catch (e) {
    console.log(e.stack);
  }

  if (raidmode == true) {
    await message.guild.members.forEach(members => {
      members.addRole(muteRole.id);
    });
    message.channel.send("🔇 ⛔ RaidMode Activé ⛔ 🔇");
    raidmode = false;
  } else {
    try {
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muteRole, {
          SEND_MESSAGES: true,
          ADD_REACTIONS: true
        });
      });
    } catch (e) {
      console.log(e.stack);
    }

    message.channel.send("🔊 ✔ RaidMode Désactivé ✔ 🔊");
    raidmode = true;
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rm"],
  permLevel: 0
};

module.exports.help = {
  name: "raidmode"
};
