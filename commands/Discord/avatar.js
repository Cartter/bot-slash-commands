const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");


exports.run = async ({ client, interaction, lang }) => {

    const member = interaction.options.getMember('user') || interaction.member;
    const avatar = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 });

    let foto = new EmbedBuilder()
        .setTitle(`:frame_photo: ${member.user.tag}`)
        .setDescription(`clique [aqui](${avatar}) para baixar o avatar do membro`)
        .setImage(avatar)
    interaction.reply({ embeds: [foto] })
}

exports.help = {
    name: "avatar",
    aliases: ['foto', 'imagem'],
    description: "Mostra avatar de um membro",
    usage: "avatar [@user]",

    options: [
        {
            name: 'user',
            description: 'selecione o usuario',
            type: 6,
        },
    ]
};