const Discord = require('discord.js');

     exports.run = async(client, message, args) => {
    const fetch = require("node-fetch")

    const data = await fetch("http://fivem.pmarp.com:30120/players.json")
    .then(res => res.json())

    const getDiscordID = user => user.players.find(id => id.includes("discord")).replace("discord:", "")
    const DataBlock = data.map(user => ` Name: ${user.name}, Discord: ${getDiscordID(user)}`).join("\n")

    console.log(DataBlock)
     }
