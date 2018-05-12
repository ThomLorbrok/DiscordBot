const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("!");

bot.on('ready', () => {
    console.log("Prêt à travailler chef ");
});

bot.on('ready', () => {
    bot.user.setActivity("!help | DiscordBot")
    });

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === "ping"){
        message.reply("pong");
        console.log('ping pong');
    }

    if (message.content === prefix + "help"){
        message.channel.sendMessage("Les commandes : ping ,!infobot , !inviter , !facebook , !snap , !clear , !infodiscord");
        console.log("Help demandé");
    }

    if (message.content === prefix + "infobot"){
        message.channel.sendMessage("Le bot à été créer par Thom.Lorbrok le meilleur développeur");
        console.log("Des infos sur le DiscordBot");
    }

    if (message.content === prefix + "inviter"){
        message.channel.sendMessage("Pour m'inviter : https://discordapp.com/oauth2/authorize?client_id=444578124223610900&permissions=8&scope=bot");
        console.log("Inviter le bot");
    }

    if (message.content === prefix + "facebook"){
        message.channel.sendMessage("Facebook est un réseaux social , développer par un homme de 26ans");
        console.log("Facedebook demandé");
    }

    if (message.content === prefix + "snap"){
        message.channel.sendMessage("Snap est un réseaux social ou on peut faire des stories etc ! :)");
        console.log("Snap demandé");
    }

    if (message.content === prefix + "clear"){
        message.channel.sendMessage("La commende est pas encore disponible ");
        console.log("Clear demandé");
    }

    if(message.content === prefix + "infodiscord")
    var embed = new Discord.RichEmbed()
    .setDescription("Information du Discord")
    .addField("Nom du discord", message.guild.name)
    .addField("Crée le", message.guild.createdAt)
    .addField("Tu as rejoin le", message.member.joinedAt)
    .addField("Utilisateur sur le discord", message.guild.memberCount)
    .setColor("0x0000FF")
 message.channel.sendEmbed(embed)

});

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "bienvenue").send(`Bienvenue ${member}`)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenue").send(`${member} vien de quitter`)
})
