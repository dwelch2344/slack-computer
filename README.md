# Computer

Simple little project to post messages to slack via a Bot. 

* Setup your [bot](https://api.slack.com/bot-users) and grab the token. 
* Set environment variables `PORT`, `BOT_TOKEN` (and optionally `BOT_NAME`) 
* Begin POSTing away to `/channels/:channelNameHere`. The `message`
property of your POST's body will be sent to the slack channel. 




### TO-DO: 

- [X] Connect to Bots API
- [ ] Add basic auth on express
- [ ] Add support for direct messages / etc