module.exports = async (client) => {
    console.log("Fui iniciado com sucesso!");
    client.utils.registerCommand(client);
}