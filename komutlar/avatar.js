const Discord = require('discord.js')

    exports.run = (client, message, args) =>{
        let kullanıcı = message.mentions.members.first();
        if(kullanıcı){
            const avatar = new Discord.MessageEmbed()
            .setColor('RED')
            .setFooter( `${kullanıcı.user.username} `)
            .setImage(kullanıcı.user.avatarURL({dynamic: true, size: 2048}))
            message.channel.send(avatar)
        } else {
            const avatar = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message .author.displayAvatarURL({dynamic: true}))
            .setColor('RED')
            .setFooter(``)
            .setImage(message.author.avatarURL({dynamic: true, size: 2048}))
            message.channel.send(avatar)
        }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Avatar','pp','Pp','icon','İcon'],
    permLevel : 0
}

exports.help = {
    name: 'pp'
}