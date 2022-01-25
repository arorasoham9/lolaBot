const Discord = require("discord.js")
const client = new Discord.Client()
// let guild = new Discord.guild(///)

client.on('ready',() =>{
    console.log('Logged in as ' +client.user.tag+'!');
});

client.on('message', async(msg) => {
    if(msg.author.bot) return;

    let filter = m => m.author.id === msg.author.id
    if (!msg.author.bot && msg.content.toLowerCase().includes('hi lola'))
        //.then(() =>
    {
        msg.reply('Hi! How can Lola help?', )

            msg.channel.awaitMessages(filter, { max:1, time: 30000, errors: ['time']})
                .then(msg => {
                    msg = msg.first()
                    //console.log(msg.content)
                    //console.log(msg.content)

                    //checkCommand(msg)
                })
                .catch(collected => {
                    msg.channel.send('Umm, I don\'t think you need me anymore. I\'ll be around if you need me again \\:smile:');
                    client.destroy()
                });
        }

})



function checkCommand(msg){



}


function checkSlashCommand(msg) {
    switch (toString(msg.content).replace('##', '').toLowerCase().replace(" ",'')) {

        case 'kick':
            console.log("I reached here")
            if (msg.author.hasPermission("BAN_MEMBERS")) {
                msg.channel.reply("Who would you like to kick from the server?")
                let member = getConfirmation(msg)
                if (!member) msg.reply("Not a valid member of this server");
                if (!member.kickable) return msg.reply("I cannot kick this member!");

            }else{
                msg.reply("You do not have authority to kick members.")
            }
            break;
        default: console.log(typeof msg.content)
    }
}

function getConfirmation(msg) {
    msg.channel.awaitMessages(filter, {max: 1, time: 30000, errors: ['time']})
        .then(msg => {
            msg = msg.first()
            return msg.mentions.members.first()
        })
        .catch(collected => {
            msg.channel.send('No user found!');
            return null;
        });
}

// console.log(process.env.BOT_TOKEN)
    client.login("ENTER YOUR BOT TOKEN HERE")

// console.log(Discord.ext.commands.Bot.get_all_members)


client.on('message', async (message)=> {


    if (msg.content.startsWith('##')) {
        // console.log("Im here but not going forward")
        checkSlashCommand(msg)
    }

})