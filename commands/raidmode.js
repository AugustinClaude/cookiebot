module.exports.run = async (bot, message, args) => {
  var raidmode = false;

  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message.channel.send(
      "Vous n'avez pas les permissions pour faire cela !"
    );
  }
  let muteRole = message.guild.roles.find("name", "⛔ RaidMode ⛔");
  //création du role
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
  const servermembers = message.guild.members;
  if (raidmode == false) {
    await servermembers.addRole(muteRole.id);
    message.channel.send("🔇 ⛔ RaidMode Activé ⛔ 🔇");
    raidmode = true;
  }
  if (raidmode == true) {
    await servermembers.removeRole(muteRole.id);
    message.channel.send("🔊 ✔ RaidMode Désactivé ✔ 🔊");
    raidmode = false;
  }
  message.delete();
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
