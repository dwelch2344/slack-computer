const  SlackBot = require('slackbots');

const express = require('express')
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000

const botToken = process.env.BOT_TOKEN
const botName = process.env.BOT_NAME || 'Computer'

const app = express()
app.use(bodyParser.json())
app.post('/channels/:channelName', function (req, res) {
    let params = {}
    bot.postMessageToChannel(req.params.channelName, req.body.message, params)
        .then( result => res.send({ message: 'OK', result }))
        .fail( err => res.status(500).json({ message: 'Failed', error: err}) );
})

// create a bot
var bot = new SlackBot({
    token: botToken,
    name: botName
});

bot.on('start', function() {
    console.log('[BOT] Successfully connected')
    app.listen(port, function () {
        console.log('[Server] Listening on', port)
    })    
});


function onFailure(err){
    console.log('Failed', err)
}