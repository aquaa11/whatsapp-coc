function getMembersWithoutAttacks(clan) {
    return Object.values(clan.members)
        .filter(member => member.attacks.length === 0)
        .sort((a, b) => a.mapPosition - b.mapPosition)
        .map(member => `${member.mapPosition}. ${member.name} (TH${member.townHallLevel})`)
        .join("\n");
}

module.exports = { getMembersWithoutAttacks };
