const { EmbedBuilder } = require("discord.js");

module.exports.run = async ({ client, interaction }) => {
    let botping = new Date() - interaction.createdAt;

    const embed = new EmbedBuilder()
        .addFields([
            { name: '🤖 BOT:', value: `${Math.floor(botping)}`, inline: true },
            { name: '📡 API:', value: `${Math.floor(client.ws.ping)}`, inline: true },
        ])
    interaction.reply({ embeds: [embed] })
}

exports.help = {
    name: "ping",
    aliases: ['pong'],
    description: "Mostra o ping atual do bot",
    usage: 'ping'
};
