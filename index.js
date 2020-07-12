const Discord = require('discord.js');
const bot = new Discord.Client();
const randomPuppy = require('random-puppy');
const Canvas = require('canvas');
const prefix = 'a!'
       


bot.on('ready', () => {
    console.log('I am ready to help');
    console.log(`Logged in as Rexxus`);
    bot.user.setActivity('Development Secret Letter!');
})
bot.on("message", async message => {
    let args = message.content.substring(prefix.length).split(" ");
//////////////////////////////////////////clear command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
if(message.content.toLowerCase().startsWith( prefix + 'clear')) {
if (!message.member.roles.cache.find(r => r.name === '🌀Master' || r.name === 'Project Lead' || r.name === 'Coder' || r.name === '🛠️Developer' || r.name === 'Especial' || r.name === '🤺Secret TEAM' || r.name === 'Secret Moderator' || r.name === 'Administrator' || r.name === '🔰Moderator' || r.name === '👑SL Manager' || r.name === '👺Management' || r.name === '⚡Staff')) return message.reply('You Dont Have Permissions!')
        if(!args[1]) return message.channel.send("Please define second args!")
            message.channel.bulkDelete(args[1]);
    }
//////////////////////////////////////////kick command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    if(message.content.toLowerCase().startsWith( prefix + 'kick')) {
        if (!message.member.roles.cache.find(r => r.name === '🌀Master' || r.name === 'Project Lead' || r.name === 'Coder' || r.name === '🛠️Developer' || r.name === 'Especial' || r.name === '🤺Secret TEAM' || r.name === 'Secret Moderator' || r.name === 'Administrator' || r.name === '🔰Moderator' || r.name === '👑SL Manager' || r.name === '👺Management' || r.name === '⚡Staff')) return message.reply('You Dont Have Permissions!')
            if (!args[1]) return message.reply('**You Need To Specify A Person**')
            const user = message.mentions.users.first();
            let rreason = message.content.slice(29)
            if (!rreason) return message.reply('Please define reason!');
            if (!args[1]) return message.reply('**You Need To Add A Reason**')
            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member.kick('You Was Kicked For Reason').then(() => {
                        message.reply("Successfully Kicked " + args[1])
                        message.reply("**The Reason Was **" + rreason)
                        console.log();
                    });
                }
            } else {
                message.reply('**You Need To Specify A Person**')
                message.reply('**You Need To Add A Reason**')
            }
        }
//////////////////////////////////////////flip command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
if(message.content.toLowerCase().startsWith( prefix + 'flip')) {
        var chance = Math.floor(Math.random() * 2);
        if (chance == 0)
        {
            message.reply('Your coin landed on head!');
        }
         else
         {
             message.reply('Your coin landed on tail!');
         }
        }
//////////////////////////////////////////role command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    if(message.content.toLowerCase().startsWith( prefix + 'role')) {
    let member = message.mentions.members.first();
                 let role = message.guild.roles.cache.find(role => role.name === args[3]);
             if (!message.member.roles.cache.find(r => r.name === '🌀Master' || r.name === 'Project Lead' || r.name === 'Coder' || r.name === '🛠️Developer' || r.name === 'Especial' || r.name === '🤺Secret TEAM' || r.name === 'Secret Moderator' || r.name === 'Administrator' || r.name === '🔰Moderator' || r.name === '👺Management' || r.name === '⚡Staff')) return message.reply('You Dont Have Permissions!')
                 else if (!args[1]) return message.reply('Please enter give or remove')
                 else if ((!args[1] === "give") || (!args[1] === "remove")) return message.reply('Please enter give or remove')
                 else if (!args[2]) return message.reply('Please enter a user')
                 else if (!args[3]) return message.reply('Please enter a role name')
                 else if (args[1] === "give") member.roles.add(role).catch(console.error).then(message.channel.send('Successfully added ' + args[3] + ' role to ' + args[2]))
                 else if (args[1] === "remove") member.roles.remove(role).catch(console.error).then(message.channel.send('Successfully removed ' + args[3] + ' role from ' + args[2]))
            }
//////////////////////////////////////////help command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
if(message.content.toLowerCase().startsWith( prefix + 'help')) {
let commands = ['``ping``','``role <give or remove> <@user> <role_name>``','``kick <@user> <reason>``','``mute <@user>``','``unmute <@user>``','``meme``','``clear <amount>``','``gma``','``flip``','``say <#channel> <message>``','``stats``','``stats <user_id>``','``stats <@user>``']
            let embed = new Discord.MessageEmbed()
                  .setColor('RANDOM')
                  .setTitle("All Commands", message.guild.iconURL())
                  .setDescription(commands.join("\n"))
                  .addField("Prefix", 'a!')
                  message.channel.send(embed)
                    }
 //////////////////////////////////////////anti links , spam\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\   
    let blacklisted = ['.gg','DISCORDAPP.','https','.online','.me','DiscordApp.','.GG','discordapp.']
    let foundInText = false;
    for (var i in blacklisted) {
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
      if (foundInText) {
        message.delete();
        message.channel.send(`${message.author}` + ', Hey! spam links or invites is disabled')
      }
      let blacklisted1 = ["ass","ASS","Ass","fuck","fuk","Fk","Fuk","Fuck","shit","Shit","bitch","Bitch","nigga","Nigga","scammer"]
      let foundInText4 = false;
      for (var i in blacklisted1) {
    if (message.content.toLowerCase().includes(blacklisted1[i].toLowerCase())) foundInText4 = true;
    }
    if (foundInText4) {
    message.delete();
    message.channel.send(`${message.author}` + ', Hey! Spelling N Words not enabled')
    }  
//////////////////////////////////////////say command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
if(message.content.toLowerCase().startsWith( prefix + 'say')) {
if (!message.member.roles.cache.find(r => r.name === '🌀Master' || r.name === 'Project Lead' || r.name === 'Coder' || r.name === '🛠️Developer' || r.name === 'Especial' || r.name === '🤺Secret TEAM' || r.name === 'Secret Moderator' || r.name === 'Administrator' || r.name === '🔰Moderator' || r.name === '👺Management' || r.name === '⚡Staff')) return message.reply('You Dont Have Permissions!')
    if(!args[1]) return message.reply('Please define channel!')
    if(!args[2]) return message.reply('Please define message!')
    let argsresult;
    let mChannel = message.mentions.channels.first()

    message.delete()
    if(mChannel) {
        argsresult = args.slice(2).join(" ")
        mChannel.send(argsresult)
    } else {
        argsresult = args.join(" ")
        message.channel.send(argsresult)
    }
}
//////////////////////////////////////////stats command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ 
if(message.content.toLowerCase().startsWith( prefix + 'stats')) {
if(message.author.bot) return;
              message.delete();
              let args = message.content.split(' ');
              if(args.length > 2) {
                message.channel.send(`Incorrect Usage: !stats | !stats <user_id> | !stats @mention`);
              } else if(args.length === 2) {
                const member = message.mentions.members.size === 1 ? 
                  message.mentions.members.first() :
                  message.guild.members.cache.get(args[1]);
                if(member) {
                  const embed = new Discord.MessageEmbed()
                    .setAuthor(`${member.user.tag} (${member.id})`, member.user.displayAvatarURL())
                    .setThumbnail(member.user.displayAvatarURL())
                    .addField('Created On', member.user.createdAt.toLocaleString(), true)
                    .addField('Joined On', member.joinedAt, true)
                    .addField('Kickable', member.kickable, false)
                    .addField('Voice Channel', member.voice.channel ? member.voice.channel.name + `(${member.voice.channel.id})` : 'None')
                    .addField('Presence', member.presence.status)
                    .setDescription(`${member.roles.cache.map(role => role.toString()).join(' ')}`);
                  message.channel.send(embed);
                } else {
                  message.channel.send(`I couldn't find that member with ID ${args[1]}`);
                }
          
              } else {
                const { guild } = message;
                const embed = new Discord.MessageEmbed()
                  .setAuthor(`${guild.name} (${guild.id})`, guild.iconURL())
                  .setThumbnail(guild.iconURL())
                  .addField('Created On', guild.createdAt.toLocaleString(), true)
                  .addField('Guild Owner', guild.owner.user.tag)
                  .addField('Total Members', guild.memberCount, true)
                  .addField('Total Real Members', guild.members.cache.filter(member => !member.user.bot).size, true)
                  .addField('Total Bots', guild.members.cache.filter(member => member.user.bot).size, true)
                  .addField('Total Channels', guild.channels.cache.size, true)
                  .addField('Total Text Channels', guild.channels.cache.filter(ch => ch.type === 'text').size, true)
                  .addField('Total Voice Channels', guild.channels.cache.filter(ch => ch.type === 'voice').size, true)
                  .addField("**Boosts**", `${message.guild.premiumSubscriptionCount}`, true)
                  .addField("**Vip Perks**", `${message.guild.premiumTier}`, true)
                  .addField("**Roles Count**", `26`, true)
                  .setColor('#5CC5FF')
                  .setDescription(`${guild.roles.cache.map(role => role.toString()).join(' ')}`);
                message.channel.send(embed);
              }
            }
//////////////////////////////////////////guess my age command {gma}\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\     
if(message.content.toLowerCase().startsWith( prefix + 'gma')) {
let responses=[
    "14-17",
    "5-9",
    "30-32",
    "20-27",
    "18-20",
    "40-50",
    "1-5",
    "10-14",
    "35-40",
    "27-30"
]
let response = responses[Math.floor(Math.random()* responses.length )]
let yyEmbed = new Discord.MessageEmbed()
.setTitle(`Guess Game!`)
.setDescription(`You are between: ${response}`+ " years")
.setColor(`RANDOM`)
message.channel.send(yyEmbed)
}
//////////////////////////////////////ping command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
if(message.content.startsWith( prefix + 'ping')) { 
var chance = Math.floor(Math.random() * 500);
            if (chance == 70){
                random = 100 || 500
            }
            message.channel.send("Pinging...").then(m => {
                let ping = m.createdTimestamp - message.createdTimestamp
                let choices = ["Is this really my ping", "Is it okay? I cant look", "I hope it isnt bad"]
                let response = choices[Math.floor(Math.random() * choices.length)]
                m.edit(`${response}: Bot Latency: \`${ping}\`, API Latency: \`${Math.floor(chance)}\``)
            })
        }
//////////////////////////////////////////meme command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
if(message.content.startsWith( prefix + 'meme')) {
let reddit = [
    "meme",
    "animemes",
    "MemesOfAnime",
    "animememes",
    "AnimeFunny",
    "dankmemes",
    "dankmeme",
    "wholesomememes",
    "MemeEconomy",
    "techsupportanimals",
    "meirl",
    "me_irl",
    "2meirl4meirl",
    "AdviceAnimals"
]

let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

message.channel.startTyping();
randomPuppy(subreddit).then(async body => {
let cEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${bot.user.username} Meme!`, message.guild.iconURL())
.setImage(body)
.setTimestamp()
.setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)
message.channel.send(cEmbed)
}).then(() => message.channel.stopTyping());
}
//////////////////////////////////////////userinfo command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
if(message.content.startsWith( prefix + 'ui')) {
let uEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("User | Info")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
    .addField("**Username:**", `${message.author.username}`, true)
    .addField("**Discriminator:**", `${message.author.discriminator}`, true)
    .addField("**ID:**", `${message.author.id}`, true)
    .addField("**Status:**", `${message.author.presence.status}`, true)
    .addField("**Created At:**", `${message.author.createdAt}`, true)
    .setFooter(`Mr.Dexter Bot | Guide`, bot.user.displayAvatarURL);
     message.channel.send(uEmbed)
}
//////////////////////////////////////////unmute command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
if(message.content.startsWith( prefix + 'unmute')) {
if (!message.member.roles.cache.find(r => r.name === '🌀Master' || r.name === 'Project Lead' || r.name === 'Coder' || r.name === '🛠️Developer' || r.name === 'Especial' || r.name === '🤺Secret TEAM' || r.name === 'Secret Moderator' || r.name === 'Administrator' || r.name === '🔰Moderator' || r.name === '👺Management' || r.name === '⚡Staff')) return message.reply('You Dont Have Permissions!')
        if (!args[1]) return message.reply('Please specify a user to be unmuted!')
        let member2 = message.mentions.members.first();
        let role2 = message.guild.roles.cache.find(role => role.name === 'Banned');
        member2.roles.remove(role2).catch(console.error).then(message.channel.send('Successfully Unmuted ' + args[1]))
}
//////////////////////////////////////////mute command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
if(message.content.startsWith( prefix + 'mute')) {
if (!message.member.roles.cache.find(r => r.name === '🌀Master' || r.name === 'Project Lead' || r.name === 'Coder' || r.name === '🛠️Developer' || r.name === 'Especial' || r.name === '🤺Secret TEAM' || r.name === 'Secret Moderator' || r.name === 'Administrator' || r.name === '🔰Moderator' || r.name === '👺Management' || r.name === '⚡Staff')) return message.reply('You Dont Have Permissions!')
if (!args[1]) return message.reply('Please specify a user to be muted!')
let member1 = message.mentions.members.first();
let role1 = message.guild.roles.cache.find(role => role.name === 'Banned');
member1.roles.add(role1).catch(console.error).then(message.channel.send('Successfully Muted ' + args[1]))
}
//////////////////////////////////////////ping command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 if(message.content.toLowerCase().startsWith( prefix + 'createpoll')) {
if (!message.member.roles.cache.find(r => r.name === '🌀Master' || r.name === 'Project Lead' || r.name === 'Coder' || r.name === '🛠️Developer' || r.name === 'Especial' || r.name === '🤺Secret TEAM' || r.name === 'Secret Moderator' || r.name === 'Administrator' || r.name === '🔰Moderator' || r.name === '👺Management' || r.name === '⚡Staff')) return message.reply('You Dont Have Permissions!')
        let args = message.content.split(" ");
        let time = args[1];
        let question = args.slice(2).join(" ");
        let regex = new RegExp(/^([0-9]{2}|[0-9]{1})[sSmM]$/);
        if(regex.test(time)) {
            if(time.toLowerCase().endsWith('s')) {
                time = parseInt(time.substring(0, time.indexOf('s')));
                time *= 1000;
            } 
            else if(time.toLowerCase().endsWith('m')) {
                time = parseInt(time.substring(0, time.indexOf('m')));
                time *= 60 * 1000;
            }
            const embed = new Discord.MessageEmbed()
                .setTitle(question)
                .setDescription('React with 👍 or 👎')
                .setTimestamp();
            try {
                const polls = new Map();
                const userVotes = new Map();
                let filter = (reaction, user) => {
                    if(user.bot) return false;
                    if(['👍', '👎'].includes(reaction.emoji.name)) {
                        if(polls.get(reaction.message.id).get(user.id))
                            return false;
                        else {
                            userVotes.set(user.id, reaction.emoji.name);
                            return true;
                        }
                    }
                }
                let msg = await message.channel.send(embed);
                await msg.react('👍');
                await msg.react('👎');
                polls.set(msg.id, userVotes);
                let reactions = await msg.awaitReactions(filter, { time: time });
                let thumbsUp = reactions.get('👍');
                let thumbsDown = reactions.get('👎');
                let thumbsUpResults = 0, thumbsDownResults = 0;
                if(thumbsUp)
                    thumbsUpResults = thumbsUp.users.cache.filter(u => !u.bot).size;
                if(thumbsDown)
                    thumbsDownResults = thumbsDown.users.cache.filter(u => !u.bot).size;
                const resultsEmbed = new Discord.MessageEmbed()
                    .setTitle('Results')
                    .setDescription(`👍 - ${thumbsUpResults} votes\n\n👎 - ${thumbsDownResults} votes\n`);
                await message.channel.send(resultsEmbed);
            }
            catch(err) {
                console.log(err);
            }
        }
 }
//////////////////////////////////////////END\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\   
})
//////////////////////////////////////////welcome embed\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
bot.on('guildMemberAdd', async member => {
    const applyText = (canvas, text) => {
        const ctx = canvas.getContext('2d');
    
        // Declare a base size of the font
        let fontSize = 70;
    
        do {
            // Assign the font to the context and decrement it so it can be measured again
            ctx.font = `${fontSize -= 10}px sans-serif`;
            // Compare pixel width of the text to the canvas minus the approximate avatar size
        } while (ctx.measureText(text).width > canvas.width - 300);
    
        // Return the result to use in the actual canvas
        return ctx.font;
    };
    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('./wallhaven.jbg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // Slightly smaller text placed above the member's display name
    ctx.font = '35px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`Welcome to secret letter!`, canvas.width / 2.7, canvas.height / 3.5);

    // Add an exclamation point here and below
    ctx.font = '30px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${member.user.tag}`, canvas.width / 2.7, canvas.height / 1.8);


    ctx.font = '20px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`You are the member number ${member.guild.memberCount} !`, canvas.width / 2.4, canvas.height / 1.5);

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));
    ctx.drawImage(avatar, 25, 25, 200, 200);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'wallpaper.png');   
    bot.channels.cache.get("698201889652736042").send('Welcome to secret letter ${member}',attachment);
        let role = member.guild.roles.cache.find(role => role.name === '⚔️Secret Player');
        member.roles.add(role)
    })
bot.login(process.env.token);
