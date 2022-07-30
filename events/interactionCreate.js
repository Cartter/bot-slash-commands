module.exports = async (client, interaction) => {
    if (!interaction.type === interaction.type.ApplicationCommand) return;

    let command = interaction.commandName;
    let cmd;

    try {

        if (client.commands.has(command)) {
            cmd = client.commands.get(command);
        } else if (client.aliases.has(command)) {
            cmd = client.commands.get(client.aliases.get(command));
        }

        if (cmd) {
            cmd.run({ client, interaction })
        }
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
}