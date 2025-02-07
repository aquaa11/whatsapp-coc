const { getWarInfo } = require('./cmds/warinfo');
const { getMembersWithoutAttacks } = require('./cmds/membersWithoutAttacks');
const { getOpponentAvailableBases } = require('./cmds/opponentAvailableBases');

async function runCommand(command, war) {
    switch (command) {
        case '/warinfo':
            return getWarInfo(war);
        case '/belumnyerang':
            return `Belum menyerang:\n${getMembersWithoutAttacks(war.clan)}`;
        case '/sisabase':
            return `Base lawan yang tersedia:\n${getOpponentAvailableBases(war.opponent)}`;
        case '/menu':
            return 'Menu:\n/warinfo - Info War\n/belumnyerang - Anggota yang belum menyerang\n/sisabase - Base lawan yang tersedia';
        default:
            return 'Perintah tidak dikenal';
    }
}

module.exports = { runCommand };
