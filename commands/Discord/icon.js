const { EmbedBuilder } = require("discord.js");

exports.run = async ({ interaction, client, lang }) => {

    let guild = interaction.guild;
    let icon = guild.iconURL() ? guild.iconURL({ format: 'png', dynamic: true, size: 2048 }) : 'https://discordapp.com/assets/6debd47ed13483642cf09e832ed0bc1b.png'

    let Avatar = new EmbedBuilder()
        .setDescription(`clique [aqui](${icon}) para baixar o icone`)
        .setImage(icon)
    interaction.reply({ embeds: [Avatar] })
}


exports.help = {
    name: "icon",
    aliases: ['guildicon'],
    description: "Mostra o icone do servidor",
    usage: "avatar"
};