const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {
  const FightUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!FightUser) {
    return message.channel.send("L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur !");
  }
  const joueurs = [`:one:${message.author}`, `:two:${FightUser}`];
  const gagnant = Math.floor((Math.random() * joueurs.length));
  const fightEmbed = new Discord.RichEmbed()
    .setColor("#dc143c")
    .setTitle("⚔ Un combat à commencé !")
    .setDescription(`Combat entre :one:${message.author} et :two:${FightUser}`)
    .addField("🏆 Gagnant", joueurs[gagnant]);
      
      
  message.channel.send(fightEmbed);

};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["combat"],
  permLevel: 0
};

module.exports.help = {
  name: "fight"
}; 