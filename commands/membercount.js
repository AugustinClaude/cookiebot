const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  const servIcon = message.guild.iconURL;
  const servName = message.guild.name;
  const nbMember = message.guild.memberCount;
  var roles = message.guild.roles.size;

  const humains = message.guild.members.filter(member => !member.user.bot).size;
  const bots = message.guild.members.filter(member => member.user.bot).size;

  let botoffline = message.guild.members.filter(
    member => member.user.bot && member.presence.status === "offline"
  ).size;

  const stream = message.guild.members.filter(
    o => o.presence.status === "streaming"
  ).size;
  const dnd = message.guild.members.filter(o => o.presence.status === "dnd")
    .size;
  const idle = message.guild.members.filter(o => o.presence.status === "idle")
    .size;
  const offline = message.guild.members.filter(
    o => o.presence.status === "offline"
  ).size;
  const online =
    nbMember -
    message.guild.members.filter(o => o.presence.status === "offline").size;

  /*const everyOne = message.guild.members.has(
    role => role.id == message.guild.id
  );

  var noRoleCount = 0;

  const noRole = message.guild.members.forEach(membre => {
    membre.has(role => role.id == message.guild.id);
  });
  if (noRole) noRoleCount + 1;

  var everyoneCount = 0;
  message.guild.members.forEach(async () => {
    if (
      message.guild.members.has(
        message.guild.roles.filter(role => role.id == message.guild.id)
      )
    )
      everyoneCount + 1;
  });
  const noRole = message.guild.roles.get(message.guild.id).members;*/
  var noRole;
  var hasRoles = false;
  var roles1 = 0;
  message.guild.members.forEach(member => {
    // A REMPLACER PAR .each EN V12
    if (member.roles.size > 1) {
      hasRoles = true;
      roles1 = roles1 + 1;
      console.log("FIRST" + roles1);
      console.log("SEC" + hasRoles);
    } else hasRoles = false;
  });
  if (hasRoles == true) {
    noRole = nbMember - roles1;
    console.log("THIRD" + noRole);
  }

  /*let member;
  for (member in nbMember) {
    if (member.roles.size >= 2) {
      member++;
    }
  }
  const noRole = nbMember - member;*/

  if (botoffline == 0) botoffline = ":x: Aucun bots offline";

  const servEmbed = new Discord.RichEmbed()
    .setAuthor(servName, servIcon)
    .setColor("#8815DF")
    .setFooter(bot.user.username + " ©", bot.user.displayAvatarURL)
    .setTimestamp()
    .addField("🥝 Membres", nbMember, true)
    .addField(
      "👻 Membres sans rôle(s)",
      `${noRole} | Bugué si + de 64 membres`,
      true
    )
    .addBlankField()
    .addField("😄 Humains", humains, true)
    .addField("🤖 Bots", bots, true)
    .addBlankField()
    .addField(
      "🔘 Status des membres",
      `<:online:492774463398477834> **Online :** ${online}\n<:offline:492994318072807424> **Offline :** ${offline}\n<:idle:492993972277608448> **Inactif :** ${idle}\n<:dnd:492774462400364556> **Ne pas déranger :** ${dnd}\n<:streaming:492994618942685214> **Streaming :** ${stream}`,
      true
    )
    .addField("🍏 Membres connectés", online + dnd + idle, true)
    .addBlankField()
    .addField("🌍 Nombre de rôle(s)", roles, true)
    .addField("📁 Bots offline", botoffline, true);

  message.channel.send(servEmbed);
  message.delete();
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mc"],
  permLevel: 0
};

module.exports.help = {
  name: "membercount"
};
