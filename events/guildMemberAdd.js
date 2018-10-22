module.exports = (bot, member) => {
  member.createDM().then(function(channel) {
    return channel.send(
      `Welcome to \`\`${member.guild.name}\`\` <@${
        member.id
      }> ! Don't forget to check the rules !`
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
      `Welcome to \`\`${member.guild.name}\`\` <@${
        member.id
      }> ! You are the \`\`${member.guild.memberCount}th\`\` member !`
    );
  } else return;
};
