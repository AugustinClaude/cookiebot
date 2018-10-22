module.exports = (bot, member) => {
  member.createDM().then(function(channel) {
    return channel.send(
      `Goodbye <@${member.id}> ! You can come back in \`\`${
        member.guild.name
      }\`\` anytime !\nJust don't forget the link ! :D`
    );
  });

  const channel = member.guild.channels.find(
    ch =>
      ch.name === "welcome" ||
      ch.name === "bienvenue" ||
      ch.name === "🚪-bienvenue-🚪"
  );

  if (channel) {
    return channel.send(
      `\`\`${member.guild.name}\`\` has lost somebody :cry: : **${
        member.name
      }** ! This is so sad :( We are now \`\`${
        member.guild.memberCount
      }\`\` in this guild !`
    );
  } else return;
};
