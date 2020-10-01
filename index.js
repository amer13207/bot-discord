
const Discord = require("discord.js");
const client = new Discord.Client();


client.on('message', roodx=>{
  var rr = ['hi','hello','waht','good','sad'];
  if(roodx.content === 'hi'){
   var embed = new Discord.RichEmbed()
   .setColor('RANDOM')
   .setDescription(`${rr[Math.floor(Math.random() * rr.length)]}`)
   roodx.channel.sendEmbed(embed)
  }
})





client.login(process.env.BOT_TOKEN);
