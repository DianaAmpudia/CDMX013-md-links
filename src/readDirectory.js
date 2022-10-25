const fs = require('fs')
const path = require('path')
// const { exit } = require('process')
// const chalk = require('chalk');

const readDirectory = (route, arrayMDFiles) => {
    const directoryFiles = fs.readdirSync(route);
  
    directoryFiles.forEach((element) => {
      const pathAbsolute = path.resolve(route, element);
      const ext = path.extname(pathAbsolute);
      if (fs.lstatSync(pathAbsolute).isDirectory()) {
        readDirectory(pathAbsolute, arrayMDFiles); //recursividad
      } else if (ext === '.md') { 
        arrayMDFiles.push(pathAbsolute);
      }
    });
    // console.log(arrayMDFiles)
//     if (arrayMDFiles.length === 0) {
//       return console.log((chalk.black.bgYellowBright.bold('❌ No se encontraron archivos md ❌'))) 
// } else {
//   return arrayMDFiles; 
     //checar porque no funciona el exit 
};

module.exports = readDirectory;