const path = require('path');
const { exit } = require('process')
const chalk = require('chalk');

const pathFile = (absolutePath, arrayMDFiles) => {
  const ext = path.extname(absolutePath);
  if (ext !== '.md') { 
    console.log(chalk.black.bgYellowBright.bold('🔴 No es un archivo markdown 🔴'));
    exit();
  } else if (ext === '.md') { 
    arrayMDFiles.push(absolutePath);
    // console.log('readFile-array MD files', arrayMDFiles);
  }
}

module.exports = pathFile;