const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "11";

client.on('ready', () => {
  console.log('Logged in as ${client.user.tag}!');
});


client.on('ready', async() => {
var server = "510887635292782592"; // ايدي السررفر
var channel = "510887635292782595";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('The_Ghast , The_Ghast , The_Ghast , The_Ghast , The_Ghast , The_Ghast , The_Ghast , The_Ghast , The_Ghast , The_Ghast , The_Ghast , The_Ghast, The_Ghast, The_Ghast , The_Ghast , The_Ghast , The_Ghast , The_Ghast , ')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

client.login('NTEwOTA2MjQ5Nzg1NjM4OTE0.DsjN0g.6EGw5jYW_3yicbEYqMRTT5urDSU');
