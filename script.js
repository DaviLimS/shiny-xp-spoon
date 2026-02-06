function createPlayer(nickname, skill) {
    let level = 0;
    let roof = 0;
    const getLevel = () => level;
    const increaseLevel = () => {
        level++;
    }
    const levelUpper = () => {
        if (skill > roof) {
            increaseLevel();
            if (level >= 5) {
                roof += Math.random() * 10;
            }
        }
        else {
            skill += Math.random() * 10 / 2;
        }
    }  

    return {nickname, skill, getLevel, increaseLevel, levelUpper}
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
async function startGame() {
    let chalenge = parseInt(prompt('Qual Level será o objetivo? '));
    let player1 = createPlayer('Blwkz', Math.random()*100);
    let player2 = createPlayer('Kory', Math.random()*100);

    while(player1.getLevel() < chalenge || player2.getLevel() < chalenge) {
        player1.levelUpper();
        player2.levelUpper();
        console.log(`${player1.nickname}: Skill: ${player1.skill} Level:${player1.getLevel()}`);
        console.log(`${player2.nickname}: Skill: ${player2.skill} Level: ${player2.getLevel()}`);
        await sleep(2000);
    }

    if (player1.getLevel() === player2.getLevel()) {
        console.log('Draw!');
    }
    else {
        player1.getLevel() === chalenge ? console.log(`${player1.nickname} Won!!`) : console.log(`${player2.nickname} Wonn!!`);
    }
}

startGame();