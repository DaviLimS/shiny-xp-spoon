function startGame() {
    let chalenge = prompt('Qual Level será o objetivo? ');
}

function createPlayer(nickname, skill) {
    let level = 0;
    let roof = 0;
    const getLevel = () => level;
    const increaseLevel = () => {
        level++;
    }
    const levelUpper = () => {
        if (level >= 5) {
            roof++;
        }

        if (skill > roof) {
            increaseLevel();
        }
        else {
            skill++;
        }
    }  

    return {nickname, skill, getLevel, increaseLevel, levelUpper}
}