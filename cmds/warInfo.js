
function getRemainingHours(endTime) {
    const now = new Date();
    const diffInMs = new Date(endTime) - now;
    const hours = Math.floor(diffInMs / (3600 * 1000));
    const minutes = Math.floor((diffInMs % (3600 * 1000)) / (60 * 1000));
    return `${hours} jam ${minutes} menit`;
}

function getWarInfo(war) {
    if (!war) return 'Tidak ada data war';
    return `Sisa Waktu: ${getRemainingHours(war.endTime)}\n` +
        `Berkahir:(${new Date(war.endTime)}\n\n` +
        `Lawan: ${war.opponent.name}🔰\n` +
        `Bintang: ${war.opponent.stars}/${(war.isCWL) ? war.teamSize * 3 : war.teamSize * 6}⭐\n` +
        `Jumlah Serangan: ${war.opponent.attackCount}/${war.teamSize}⚔️\n` +
        `Persenan: ${parseInt(war.opponent.destruction)}%\n\n` +
        `Kita: ${war.clan.name}🔰\n` +
        `Bintang: ${war.clan.stars}/${(war.isCWL) ? war.teamSize * 3 : war.teamSize * 6}⭐\n` +
        `Jumlah Serangan: ${war.clan.attackCount}/${war.teamSize}⚔️\n` +
        `Persenan: ${parseInt(war.clan.destruction)}%`
}

module.exports = { getWarInfo };
