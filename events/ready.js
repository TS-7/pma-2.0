module.exports = async(client) => {
    console.log(`Ready to RP to Findout!`)
    client.channels.cache.get('760543876929945610').send(`The bot has been started on the console!`)

    client.user.setPresence({
        activity: {
            name: 'Crypticc',
            type: "LISTENING",
        },
        status: 'idle'
    })
     }