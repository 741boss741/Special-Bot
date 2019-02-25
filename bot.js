const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("545555340050300929")
setInterval(function() {
channel.send(` لا اله الا الله لا اله الا الله لا الله  الا الله`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
