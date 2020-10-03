const Discord = require('discord.js');

     exports.run = async(client, message, args) => {
    const fetch = require("node-fetch")

    const data = await fetch("http://fivem.pmarp.com:30120/players.json")
    .then(res => res.json())

    const getDiscordID = user => user.identifiers.find(id => id.includes("discord")).replace("discord:", "")

const DataBlock = data.map(user => ` **Name:** ${user.name}, **Discord:** *${getDiscordID(user)}*`).join("\n")

          if (DataBlock.length > 2000){
               let first2000 = DataBlock.slice(0, 2000)
               const information = (first2000);
          

          const YeSistaasAss = new Discord.MessageEmbed()
               .setColor('#800080')
               .setAuthor('Player List :')
               .setDescription(information)

       message.channel.send(YeSistaasAss)
          }

          const YeSistaasAss2 = new Discord.MessageEmbed()
          .setColor('#800080')
          .setAuthor('Player List :')
          .setDescription(DataBlock)

  message.channel.send(YeSistaasAss2)

  // LOGS
       const Log = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setAuthor(`${message.author.username} used the command /players in ${message.channel.name}`)

          client.channels.cache.get('760543876929945610').send(Log)
     }
