// require('dotenv').config()
const nodemailer = require("nodemailer");
const {google} = require('googleapis')
const {oAuth2Client} = require('google-auth-library');
const path = require('path');

const Email = require('email-templates')
//Step 1: Set up Google OAuth Client 
let OAuth2 = google.auth.OAuth2;

const oa2client = new OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
)


oa2client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN
})

// Step 2: create NodeMailer Transporter
let transporter  = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'imigstefan.dev@gmail.com',
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    }
})

transporter.set('oauth2_provision_cb', async (user, renew, callback)=>{
    oa2client.getAccessToken().then(accessToken => {
        callback(null, accessToken)
    })
});


const email = new Email({
    message: {
        from: 'imigstefan.dev@gmail.com'
    },
    send: true,
    transport: transporter
})


function postTextMessage(title, text){
    email.send({
        template: 'test',
        message: {
            to: 'imigstefan@gmail.com',
        },
        locals: {
            threatName: 'UDE Stipendium phisching ',
            threatDescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    
            // name: 'Scmhefan'
        },
        juiceResources: {
            preserveImportant: true,
            path: 'test/html',
            webResources: {
              // view folder path, it will get css from `mars/style.css`
              relativeTo: path.resolve('test')
            }
        }
    })
    .catch(console.error)
}


module.exports = {
    postTextMessage
}
