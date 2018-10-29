module.exports = (bot, member) => {
  member.createDM().then(function(channel) {
    return channel.send(
      `Welcome to \`\`${member.guild.name}\`\` <@${
        member.id
      }> ! Don't forget to check the rules !`
    );
  });
};
