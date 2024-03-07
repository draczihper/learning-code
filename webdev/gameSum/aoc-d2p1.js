const fs = require('fs');

const targetCounts = {
red: 12,
green: 13,
blue: 14,
}

const content = fs.readFileSync('game.txt', 'utf8').split('\n').reduce((acc, line) => {
    if (line === "") {
        return acc;
    }

    const gameId = +line.split(":")[0].split(" ")[1];
    const validLines = line.split(":")[1].split(";").map(game => {
        const gameIndex = game.split(",").map(cube => {
            const color = cube.trim().split(" ")[1];
            const count = +cube.trim().split(" ")[0];
            return count <= targetCounts[color]
        });

        return gameIndex.every(cube => cube === true);
    });

    const valid = validLines.every(line => line === true);
    if (valid) {
        acc.push(gameId);
    }
    return acc;

}, []);

console.log(content.reduce((acc, gameId) => acc + gameId, 0));