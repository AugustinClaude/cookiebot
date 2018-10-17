const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
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
    role => role.id !== message.guild.id
  );
  const noRole = Math.floor(Math.random() * roles - everyOne);*/

  const noRole = message.guild.members.forEach(member => {
    member.has(role => role.id !== message.guild.id);
  });

  if (botoffline == 0) botoffline = ":x: Aucun bots offline";

  const servEmbed = new Discord.RichEmbed()
    .setAuthor(servName, servIcon)
    .setColor("#8815DF")
    .setFooter(bot.user.username + " ©", bot.user.displayAvatarURL)
    .setTimestamp()
    .addField("🥝 Membres", nbMember, true)
    .addField("👻 Membres sans rôle(s)", `${noRole}`, true)
    .addBlankField()
    .addField("😄 Humains", humains, true)
    .addField("🤖 Bots", bots, true)
    .addBlankField()
    .addField(
      "🔘 Status des membres",
      `<:online:492774463398477834> Online : ${online}\n   <:offline:492994318072807424> Offline : ${offline}\n    <:idle:492993972277608448> Inactif : ${idle}\n    <:dnd:492774462400364556> Ne pas déranger : ${dnd}\n    <:streaming:492994618942685214> Streaming : ${stream}`,
      true
    )
    .addField("🍏 Membres connectés", online, true)
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
