const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const servIcon = message.guild.iconURL;
  const servName = message.guild.name;
  const nbMember = message.guild.memberCount;
  const humains = message.guild.members.filter(member => !member.user.bot).size;
  const bots = message.guild.members.filter(member => member.user.bot).size;
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
  const botonline = message.guild.members.filter(
    member => member.user.bot && member.presence.status === "online"
  ).size;
  let botoffline = message.guild.members.filter(
    member => member.user.bot && member.presence.status === "offline"
  ).size;
  var roles = message.guild.roles.size;

  //let Fondacount = message.guild.roles.find(`name`, '🐲 Fondateur 🐲').members.size
  //let Admincount = message.guild.roles.find(`name`, '🐯 Admin 🐯').members.size
  //let Modocount = message.guild.roles.find(`name`, '🦁 Modo 🦁').members.size
  //let Devcount = message.guild.roles.find(`name`, '🚀 Développeur 🚀').members.size
  //let StaffOnline = message.guild.members.filter(o => o.presence.status === 'online').size

  /*if (!Fondacount || !Admincount || !Modocount || !Devcount) {
        return message.channel.send("Commande <membercount OFFLINE, merci de réessayer plus tard")
    }*/

  if (botoffline == 0) botoffline = ":x: Aucun bots offline";

  const servEmbed = new Discord.RichEmbed()
    .setAuthor(servName, servIcon)
    .setColor("#8815DF")
    .setFooter(bot.user.username + " ©", bot.user.displayAvatarURL)
    .setTimestamp()
    .addField("🥝 Membres", nbMember, true)
    .addField("👻 Membres sans rôle(s)", "noRole", true)
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
  //.addField('📁 Nombre de staff', Fondacount + Admincount + Modocount + Devcount, true)
  //.addField('📆 Staff connectés', StaffOnline, true)

  return message.channel.send(servEmbed);
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
