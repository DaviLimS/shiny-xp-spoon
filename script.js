function createPlayer(nickname, skill) {
    let level = 0;
    const getLevel = () => level;
    const increaseLevel = () => {
        level++;
    }

    return {nickname, skill, getLevel, increaseLevel}
}

function startGame() {
    let chalenge = prompt('Qual Level será o objetivo? ');
}