module.exports = (client, member) => {
    const defaultChannel = member.guild.channels.cache.find(c => c.name === "👋welcome👋").send(`Welcome to PMA-RP ${member.user}! Feel free to DM @Madison for help!`)
  };