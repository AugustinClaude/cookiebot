module.exports = async bot => {
  await wait(1000);

  bot.log(
    "log",
    ` = ${bot.user.username} est en ligne ! =\n= ${
      bot.users.size
    } utilisateurs =\n= ${bot.channels.size} channels =\n= ${
      bot.guilds.size
    } serveurs :\n - ${bot.guilds
      .array()
      .map(g => g)
      .join("\n - ")}`,
    "Prêt!"
  );

  bot.user.setPresence({
    game: {
      name: `<help | ${bot.guilds.size} guilds`,
      type: "PLAYING"
      //url: 'https://www.twitch.tv/spokloo'
    },
    status: "online"
  });
};
