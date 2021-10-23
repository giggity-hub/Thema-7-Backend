require('dotenv').config()
const express = require('express')
const reddit = require('./apis/reddit')
const twitter = require('./apis/twitter')
const nodeMailer = require('./apis/nodeMailer')
const discord = require('./apis/discord')


const app = express()
const PORT = 5000;

// use middleware to convert request to json
app.use(express.json())


app.post('/alert', function(req, res){
    const {title, text} = req.body
    
    if (title && text){
        // reddit.postTextMessage(title, text)
        // twitter.postTextMessage(title, text)
        // nodeMailer.postTextMessage(title, text)
        discord.postTextMessage(title, text)

        res.status(200).send({
            ok: 'ok'
        })
    }else{
        res.status(400).send({
            fail: "fail"
        })
    }
})


app.listen(PORT, ()=>{
    console.log(`listening on port http://localhost:${PORT}`);
})

