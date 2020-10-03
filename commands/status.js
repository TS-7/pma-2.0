const Discord = require('discord.js');

     exports.run = async(client, message, args) => {
    const fetch = require("node-fetch")

    const info = await fetch("https://servers-live.fivem.net/api/servers/single/7blbde")
    .then(res => res.json())

    const {hostname, clients, vars, sv_maxclients} = info.Data
    const Embed = new Discord.MessageEmbed() 
        .setColor(`#0099ff`)
        .setTitle(`PMA-RP is currently online!`)
        .setDescription(`There are ${clients}/${sv_maxclients} in the city.`)
        .addFields(
            {name: 'IP :', value: '`connect fivem.pmarp.com`', inline: true},
            {name: 'Whitelist :', value: `http://pmarp.com/whitelist`, inline: true},
            {name: 'Support Our Streamers :', value: `${info.Data.vars.Streamers}`, inline: false}
        )
        .setFooter(`Designed by Crypticc`)
        message.channel.send(Embed)

}