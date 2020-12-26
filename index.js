const Discord = require("discord.js");
var fs = require("fs");
const config = require("./config.json");

const client = new Discord.Client();

client.commands = new Discord.Collection();
const prefix = "!"


client.on("ready", () => {
    console.log("Bot jest gotowy!");
    client.user.setActivity("BECZKARP", { type: 'PLAYING' });
})

client.on("message", async message => {
    if (message.content === "jebac") return message.channel.send("Emerycika!");
})

client.on("message", message => {
    if (message.content.includes("kushek")) return message.channel.send("Kushek to król");
})

client.on("message", async message => {
    if (message.content.includes("berti")) return message.channel.send("Berti jest na wakacjach!");

})

{
    client.on('message', message => {
        if (message.content.includes("@")) {
            if (message.channel.name == "『🚓』podania°lspd") {
                sting = message
                const Channel = client.channels.cache.get("792127877965152256");
                message.delete()
                Channel.send(message).catch(e => console.log(e));
            }
        }
    });


    client.on('message', message => {
        if (message.content.includes("@")) {
            if (message.channel.name == "『🚗』podania°ems") {
                sting = message
                const Channel = client.channels.cache.get("792148132522754089");
                message.delete()
                Channel.send(message).catch(e => console.log(e));
            }
        }
    });

    client.on('message', message => {
        if (message.content.includes("@")) {
            if (message.channel.name == "『🔪』podania°crime") {
                sting = message
                const Channel = client.channels.cache.get("792151207807549470");
                message.delete()
                Channel.send(message).catch(e => console.log(e));
            }
        }
    });

    client.on('message', message => {
        if (message.content.includes("@")) {
            if (message.channel.name == "『🚗』podania°lsc") {
                sting = message
                const Channel = client.channels.cache.get("792151245238042624");
                message.delete()
                Channel.send(message).catch(e => console.log(e));
            }
        }
    });



    client.on('message', message => {
        if (message.content.includes("@")) {
            if (message.channel.name == "「🎇」podania°firma") {
                sting = message
                const Channel = client.channels.cache.get("792151227391410176");
                message.delete()
                Channel.send(message).catch(e => console.log(e));
            }
        }
    });

    client.on('message', message => {
        if (message.content.includes("@")) {
            if (message.channel.name == "『🎓』t°support") {
                sting = message
                const Channel = client.channels.cache.get("792154011004305419");
                message.delete()
                Channel.send(message).catch(e => console.log(e));
            }
        }
    });

    client.on('message', message => {
        if (message.content.includes("@")) {
            if (message.channel.name == "『👻』podanie°ck°fck") {
                sting = message
                const Channel = client.channels.cache.get("792155327935676437");
                message.delete()
                Channel.send(message).catch(e => console.log(e));
            }
        }
    });
}




client.on("message", async message => {
    if (message.author.bot) return;

    if (message.content.indexOf(prefix) !== 0) return;
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase()
    
          if (command == "pisz"){
        message.delete()
          if (message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(message.content.slice(prefix.length + 4))
           }

});
           



client.login(config.token);
