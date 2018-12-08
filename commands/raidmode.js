var raidmode = true;

module.exports.run = async (bot, message, args) => {
  bot.setMaxListeners(Infinity);

  message.delete();
  if (!message.member.hasPermission("MANAGE_GUILD")) {
    return message.channel.send(
      "Vous n'avez pas les permissions pour faire cela !"
    );
  }

  let muteRole = message.guild.roles.find(r => r.name == "⛔ RaidMode ⛔");

  if (!muteRole) {
    try {
      muteRole = await message.guild.createRole({
        name: "⛔ RaidMode ⛔",
        color: "#ff0000",
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

  if (raidmode == true) {
    await message.guild.members.forEach(members => {
      members.addRole(muteRole.id);
    });

    message.channel.send("🔇 ⛔ RaidMode Activé ⛔ 🔇");
    raidmode = false;
  } else {
    await message.guild.members.forEach(members => {
      members.removeRole(muteRole.id);
    });

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
