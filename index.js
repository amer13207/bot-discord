const express = require("express");
const app = express();

app.listen(() => console.log("start btrolie"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

const prefix = "."
const developers = "751426909669425243"

//كود اقتراحات
let sug99 = JSON.parse(fs.readFileSync("./suges.json", 'utf8'));
 
client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "set-sug")){
 
 if(badboy.author.bot || !badboy.guild) return badboy.reply("this command for server only")
 
    if(!badboy.member.hasPermission("MANAGE_GUILD")) return badboy.channel.send("حرك")
    let args = badboy.content.split(" ").slice(1).join(" ")
    if(!args) return badboy.channel.send("منشن الروم")
 
let channel = badboy.mentions.channels.first() 
 
    if(!channel) return badboy.channel.send("لا يمكنني العثور على روم الاقتراحات")
 
 
 
 
badboy.channel.send("تم")
 
sug99[badboy.guild.id] = {
channel: channel.name,  
server_name: badboy.guild.name,
  server_id: badboy.guild.id
 
}
fs.writeFile("./suges.json", JSON.stringify(sug99), (err) => {
if(err)
console.error(err);
 
})
  }
})
 
 
client.on('message', badboy => {
 
 
if(badboy.content.startsWith(prefix + "sug")){
 if(badboy.author.bot || !badboy.guild) return badboy.reply("this command for server only")
 
let thesug = badboy.content.split(" ").slice(1).join(" ");
if(!thesug) return badboy.channel.send(`اكتب اقتراحك ولا تكون غبي`);
let sugchanel = badboy.guild.channels.cache.find(ro => ro.name === `${sug99[badboy.guild.id].channel}`);
if(!sugchanel) return badboy.channel.send("لا يمكنني العثور على روم الاقتراحات")
 
var embed = new Discord.MessageEmbed()
.setTitle(`NEW SUG`)
 
.setThumbnail(`${badboy.author.avatarURL({dynamic : true})}`)
.setColor("BLUE")
.setFooter(`Sug By ${badboy.author.username}`, badboy.author.displayAvatarURL({dynamic : true}))
 
.setDescription(`${thesug}`)
 
  badboy.delete();
 
badboy.channel.send("تم ارسال اقتراحك")
 
sugchanel.send(embed).then(badboy => {
 
   badboy.react("👍")
badboy.react("👎")
 
})
 
 
 
fs.writeFile("./suges.json", JSON.stringify(sug99), (err) => {
if(err)
console.error(err);
})
 
  }
})





client.login(process.env.BOT_TOKEN);
