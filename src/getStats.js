const chalk = require('chalk');

const getStats = (arrayLinks) => {
const uniqueLinks = [... new Set(arrayLinks.map((element) => element.href))]
console.log((chalk.black.bgYellowBright.bold('🍄 Links únicos:')), uniqueLinks)
}

module.exports = getStats;