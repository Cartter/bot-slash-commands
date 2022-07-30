const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { readdirSync } = require('fs');


const registerCommand = async (client) => {

    const commands = [];

    const load = dirs => {
        const command = readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith('.js'));
        for (const file of command) {
            let cmd = require(`../../commands/${dirs}/${file}`);
            commands.push(cmd.help);
        }
    }

    const commandsDir = readdirSync('./commands/');
    commandsDir.forEach(x => load(x));

    const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

    try {
        console.log('[Discord API] Started refreshing application (/) commands.');
        await rest.put(
            Routes.applicationCommands(client.user.id),
            { body: commands },
        )
        console.log('[Discord API] Successfully reloaded application (/) commands.');

    } catch (error) {
        console.error(error);
    }
}

module.exports = registerCommand;