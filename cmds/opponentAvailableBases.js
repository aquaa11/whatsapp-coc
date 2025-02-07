function getOpponentAvailableBases(opponent) {
    return Object.values(opponent.members)
        .filter(member => member.defenseCount === 0)
        .sort((a, b) => a.mapPosition - b.mapPosition)
        .map(member => `${member.mapPosition}. ${member.name} (TH${member.townHallLevel})`)
        .join("\n");
}

module.exports = { getOpponentAvailableBases };
