module.exports = (bot, member) => {
  var options;
  const link = member.guild.channels.createInvite(options.maxAge(0));

  member.createDM().then(function(channel) {
    return channel.send(
      `Goodbye <@${member.id}> ! You can come back in \`\`${
        member.guild.name
      }\`\` anytime !\n:globe_with_meridians: **Link :** ${link}`
    );
  });

  const channel = member.guild.channels.find(
    ch => ch.name === "welcome" || ch.name === "bienvenue"
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
