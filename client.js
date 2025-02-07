const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { ClashClient, loginToCOC } = require("./helpers/auth");
const { runCommand } = require('./switch');


async function connectionLogic() {
    await loginToCOC();

    // Create a new client instance
    const client = new Client(
        {
            authStrategy: new LocalAuth(),
            puppeteer: {
                headless: true, // Tidak menampilkan jendela browser
                args: ["--no-sandbox", "--disable-setuid-sandbox"], // Optimasi untuk kecepatan
            },
        }
    );

    // When the client is ready, run this code (only once)
    client.once('ready', () => {
        console.log('Whatsapp client is ready!');
    });

    // When the client received QR-Code
    client.on('qr', qr => {
        qrcode.generate(qr, { small: true });
    });

    client.on('message_create', async message => {
        if (!message.body.startsWith('/')) return;
        const clanTag = '#2G08GG02L';
        const war = await ClashClient.getCurrentWar({ clanTag, round: "CURRENT_ROUND" });
        const response = await runCommand(message.body, war);
        client.sendMessage(message.from, response);
    });

    // Start your client
    client.initialize();
}

connectionLogic();