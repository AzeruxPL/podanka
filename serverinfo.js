const Discord = require("discord.js");

module.exports.run = async (_client, message) => {
    const infoEmbed = New Discord.RichEmbed()
        .setColor("#00FF00")
    .setAuthor("Informacje o serwerze" + message.guild.name, message.guild.iconURL)
    .addField("ID gildi", nessage.guild.id)
    .addField("ID kana³u AFK:",message.guild.afkChannelID, true)
    .addField("Utworzony:"), message.guild.createdAT, true)
    .addField("W³aœciciel:"), message.guild.owner, true)
    .setTimestamp

}


module.exports.help = {
    name:"server-info"
}