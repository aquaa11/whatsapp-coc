# WhatsApp Clash of Clans Bot

A Node.js-based WhatsApp bot that integrates with Clash of Clans to provide the following features:

- **Check Members Without War Attacks**: Identify clan members who haven't participated in the current war.
- **View Ongoing War Information**: Retrieve details about the ongoing clan war.
- **Check Unattacked Enemy War Bases**: List enemy bases that haven't been attacked yet.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Commands](#commands)

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/aquaa11/whatsapp-coc.git
   cd whatsapp-coc


## Configuration

1. **Clash of Clans API Credentials**:

   - Update the `config.json` file with your Clash of Clans Developer credentials:

     ```json
     {
       "coc_dev": {
         "email": "your coc api email",
         "password": "your coc api pw",
         "keyName": "your coc api key name"
       },
       "developer": "your number bot",
       "command_prefix": "!"
     }
     ```

   - The bot will use these credentials to authenticate and generate an API key for accessing Clash of Clans data.
   - Command prefix is prefix u use to call the commands, example: !warinfo

2. **WhatsApp Session**:

   The bot uses `whatsapp-web.js` for WhatsApp integration. On the first run, you'll need to scan a QR code to authenticate:

   - Run the bot:

     ```bash
     node client.js
     ```

   - A QR code will be displayed in the terminal. Scan it using your WhatsApp application to establish the session. The session data will be saved to avoid re-authentication on subsequent runs.


## Commands

- `!belumnyerang` - Check members who haven't attacked in the current war.
- `!warinfo` - View ongoing war information.
- `!sisabase` - Check enemy war bases that haven't been attacked.
- `!menu` - Show the list of available commands.
