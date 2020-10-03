const Discord = require('discord.js')

exports.run = (client, message, [mention, ...reason]) => {

    const modRole = message.guild.roles.cache.find(role => role.name === "Moderator");
    const superMods = ['460078206326800434'];

    if (!modRole)
      return console.log("You need to have the 'Moderator' role in your server!");
  
    if (!message.member.roles.cache.has(modRole.id) && !superMods.includes(message.member.id))
      return message.reply("You are not authorised to use this command you poo poo head");
  
    if (message.mentions.members.size === 0)
      return message.reply("Who am I supposed to kick? Your ass ?");
  
    if (!message.guild.me.hasPermission("KICK_MEMBERS"))
      return message.reply("I do not have permissions to kick someone:frowning:");
  
    const kickMember = message.mentions.members.first();
  
    kickMember.kick(reason.join(" ")).then(member => {
      message.reply(`${member.user.username} got his ass kicked!`);

      const Log = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setAuthor(`${member.user.username} was kicked from the server by ${message.author.username}.`)

        client.channel.cache.get('760543876929945610').send(Log)
    });
};