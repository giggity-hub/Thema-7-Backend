const snoowrap = require('snoowrap');
// require('dotenv').config()

const r = new snoowrap({
    userAgent: process.env.REDDIT_USER_AGENT,
    clientId: process.env.REDDIT_CLIENT_ID,
    clientSecret: process.env.REDDIT_CLIENT_SECRET,
    username: process.env.REDDIT_USER_NAME,
    password: process.env.REDDIT_PASSWORD,
  });

const subredditName = 'praxisprojekt'

function postTextMessage(title, text){
    r.getSubreddit(subredditName)
        .submitSelfpost({title,text})
}

module.exports = {
    postTextMessage
}