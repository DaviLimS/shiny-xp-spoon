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

function startGame() {
    let chalenge = prompt('Qual Level será o objetivo? ');
    let player1 = createPlayer('Blwkz', Math.random()*100);
    let player2 = createPlayer('Kory', Math.random()*100);

    while(player1.getLevel() < chalenge || player2.getLevel() < chalenge) {
        player1.levelUpper();
        player2.levelUpper();
        console.log(`${player1.nickname}: Skill: ${player1.skill} Level:${player1.getLevel}`);
        console.log(`${player2.nickname}: Skill: ${player2.skill} Level: ${player2.getLevel}`);
    }
}