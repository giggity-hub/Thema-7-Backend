const axios = require('axios').default;

const webhook = process.env.DISCORD_WEBHOOK;

const colorCodes = {
    red: '15158332'
}


function postTextMessage(title, text){
    axios.post(webhook,{
        username: 'scheeesh',
        content: text,
        embeds: [{
            title: title,
            color: colorCodes.red
        }]
    })
}


module.exports = {
    postTextMessage,
}