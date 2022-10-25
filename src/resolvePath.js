const path = require('path');
const fs = require('fs');
const { exit } = require('process')
const chalk = require('chalk');

const resolvePaths = (route) => {
  let pathAbsolute;
    if (path.isAbsolute(route) === false) {
      pathAbsolute = path.resolve(route);
    } else {
      pathAbsolute = route;
    }
    // console.log('resolvePath-ruta absoluta:',`${pathAbsolute}`)

  const fileExist = fs.existsSync(pathAbsolute) 
  if (!fileExist) {
    console.log((chalk.black.bgYellowBright.bold('Esta ruta no es válida ❌')))
    exit()
  } else {
    console.log((chalk.black.bgYellowBright.bold('Esta ruta si es válida ✅')))
  }
}
module.exports = resolvePaths;
