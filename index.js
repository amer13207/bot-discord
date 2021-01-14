
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
