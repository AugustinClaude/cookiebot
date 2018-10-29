module.exports = (bot, member) => {
  member.createDM().then(function(channel) {
    return channel.send(
      `Goodbye <@${member.id}> ! You can come back in \`\`${
        member.guild.name
      }\`\` at anytime !\nJust don't forget the link ! :D`
    );
  });
};
