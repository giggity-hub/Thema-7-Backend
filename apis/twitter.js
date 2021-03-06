

const Twitter = require('twitter')
// require('dotenv').config()

var client = new Twitter({
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_KEY_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });


function postTextMessage(title, text){
    // tweets do not have a title
    client.post('statuses/update', {status: text},  function(error, tweet, response) {
        if(error) throw error;
        console.log(tweet);  // Tweet body.
      });
}

module.exports = {
    postTextMessage
}