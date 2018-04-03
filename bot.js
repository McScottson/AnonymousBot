const Discord = require('discord.js');
const client = new Discord.Client()
const settings = require(`./client.json`)
let theset = new Set();
client.on('ready', () => {
  console.log('Anonymous Online.')
  client.user.setActivity("'/0U",{ type: "WATCHING"} );
});
//Main Variables
let botOwner = '203587309843513344'
let BotId = '430052641679343619'
let prefix = "<@430052641679343619> "

/***Main Events*/

client.on('message', msg => {


if (msg.author.bot) return;

if (msg.content ===prefix + 'ping') {
  msg.channel.send("Pong: " + `*${Math.round(msg.client.ping)}*`)
}

  if (msg.channel.type === "dm") return msg.channel.send("I do not chat in DMs.");


  function clean(text) {
    if (typeof (text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
      return text;
  }
  const args = msg.content.split(" ").slice(1);

  if (msg.content.startsWith("hieval")) {
    if (msg.author.id !== '203587309843513344') return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      msg.channel.send(clean(evaled), { code: "xl" });
    } catch (err) {
      msg.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }

if (msg.content ===prefix + 'guildinfo') {
  const embed = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setDescription("*Name*: " + msg.guild.name + " *Id*: " + msg.guild.id)
    .setColor("#292929")
  .addField("Members", msg.guild.memberCount + ' Members In Total.')
  .addField("Users", msg.guild.members.filter(u => !u.user.bot).size + " Bots In Total.", true)
  .addField("Bots", msg.guild.members.filter(u => u.user.bot).size + " Users In Total.", true)
  .addField("Roles", msg.guild.roles.size + " Role(s)")
  .addField("Roles [Name]", msg.guild.roles.map(r => r.name).join(', '))
  .addField("Members", msg.guild.members.map(m => m.name).join(', '))
  msg.channel.send(embed)
}

if (msg.content ===prefix + 'who is god')

if (msg.content ===prefix + 'commands') {
  const embed = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL, settings.invite)
  .setDescription("A list of commands. Prefix: `@Mention`")
  .addField("guildinfo", "Guild information.", true)
  .addField("userlkup [ID/Mention]", "Tell info about a user", true)
  .addField("serverlkup [ID]", "Look up info a server.")
  msg.channel.send(embed)
}

if (msg.content.startsWith(prefix + 'userlkup')) {
  let msgcontent = msg.content.slice(31)
  let userToCheck = client.users.get(msgcontent) || client.users.get(msg.mentions.users.first().id)
if (userToCheck) {
  const embed = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setDescription("About: " + userToCheck.username)
  .setColor("#292929")
  .addField("ID", userToCheck.id, true)
  .addField("Tag", userToCheck.tag, true)
  .addField("Account Creation Date", userToCheck.createdAt)
  .addField("Status", userToCheck.presence.status)
  .addField("Last Message", userToCheck.lastMessage)
  .setThumbnail(userToCheck.avatarURL)
  msg.channel.send(embed)
}else{
  msg.channel.send("Invalid user.")
}
}
if (msg.content.startsWith(prefix + 'serverlkup')) {
  let msgcontent = msg.content.slice(33)
  let serverToCheck = client.guilds.get(msgcontent)
  if (serverToCheck) {
    const embed = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setColor("#292929")
    .setThumbnail(serverToCheck.iconURL)
    .setDescription("About: " + serverToCheck.name)
    .addField("Member Count", serverToCheck.memberCount)
    .addField("Users", serverToCheck.members.filter(u => !u.user.bot).size, true)
    .addField("Bots", serverToCheck.members.filter(b => b.user.bot).size, true)
    .addField("Roles", serverToCheck.roles.size, true)
    .addField("ID", serverToCheck.id)
    .addField("Verification Level", serverToCheck.verificationLevel)
    .addField("Owner", "Name: `" + serverToCheck.owner + "` ID: `" + serverToCheck.ownerID + "`")
    .addField("Voice Channels", serverToCheck.channels.filter(c => c.type == "voice").size, true)
    .addField("Text Channels", serverToCheck.channels.filter(c => c.type =="text").size, true)
    .addField("Region", serverToCheck.region)
    .addField("Emojis", serverToCheck.emojis.size)
    .addField("Creation Date", serverToCheck.createdAt)
    msg.channel.send(embed)
  }else{
    msg.reply("Invalid Server ID.")
  }
}

  if (msg.content ==='<@430052641679343619>') {
    msg.channel.startTyping(1)
    setTimeout(() => {
  let Answers = ["|-|3LL0 51R.", "|-|3LL0 " + `<@${msg.author.id}>`, "1$ 7|-|3r3 4|\|'/7|-|1|\|9 j00Z \/\/4|\|7?"];
msg.channel.send(Answers[Math.floor(Math.random() * Answers.length)].toString())
msg.channel.stopTyping(true)
}, 1000);
  }
if (msg.content ===prefix + 'invite') {
  const embed = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setColor("#292929")
  .addField("Invite The Bot.", settings.invite)
  msg.author.send(embed)
}

if (msg.content.startsWith(prefix + 'newtext')) {
  if (msg.member.hasPermission("ADMINISTRATOR")) {
    let thename = msg.content.slice(29).split(' ')
    msg.guild.createChannel(thename.join('-'), "text");
    msg.channel.send(":ballot_box_with_check: Channel Named `" + thename.join(' ') + '` Created.')
  }else {
    msg.channel.send(':x: __`ADMINISTRATOR`__ **PERMISSION REQUIRED** :x:')
  }
}

if (msg.content.startsWith(prefix + "newrole")) {
  if (msg.member.hasPermission("MANAGE_ROLES")) {
    let rolename = msg.content.slice(30).split(' ')
    let rolecolor = oof(msg)
    if (rolename) {
      msg.guild.createRole({name: rolename.toString(), color: 'BLUE'});
    }
  }
}




if (msg.content.startsWith(prefix + 'whois')) {
  let msgcontentxd = msg.content.slice(28)
  let memberToCheck = msg.guild.members.get(msgcontentxd) || msg.mentions.members.first();
  if (memberToCheck) {
    const embed = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setColor("#292929")
    .setDescription("About: " + memberToCheck.user.username)
    .addField("Joined Date", memberToCheck.joinedAt, true)
    .addField("Account Creation", memberToCheck.user.createdAt, true)
    .addField("Roles", memberToCheck.roles.size)
    .addField("Nickname", memberToCheck.nickname || "None")
    .addField("Kickable", memberToCheck.kickable, true)
    .addField("Bannable", memberToCheck.bannable, true)
    .addField("Highest Role", memberToCheck.highestRole.name + " | " + memberToCheck.highestRole.id)
    .addField("Muted", memberToCheck.mute)
    .addField("Status", memberToCheck.presence.status)
    .addField("Last Message", memberToCheck.lastMessage + " | " + memberToCheck.lastMessageID)
    msg.channel.send(embed)

  }else {
    msg.reply("Invalid Member.")
  }
}
});

//Login To Discord
client.login(settings.token)
function oof(msg) {
  return msg.content.slice(32).split(' ');
}

