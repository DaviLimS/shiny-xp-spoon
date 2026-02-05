function createPlayer(nickname, skill) {
    const level = 0;
    const getLevel = () => level;
    const increaseLevel = () => {
        level++;
    }

    return {nickname, skill, getLevel, increaseLevel}
}