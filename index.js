const fs = require('fs');
const chalk = require('chalk');
const resolvePaths = require('./src/resolvePath.js')
const readDirectory = require('./src/readDirectory.js')
const readFile = require('./src/readFile.js') 
const getLinks = require('./src/getLinks.js')
const validateLinks = require('./src/validateLinks.js');
const { exit } = require('process');
// const { exit } = require('process');

//creamos la interfaz que voy a utilizar para recibir y mostrar información al usuario
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const welcome = () => {
    console.log(chalk.whiteBright.bgMagenta.bold('=============================================='))
    console.log(chalk.whiteBright.bgMagenta.bold('         🔆 BIENVENID@ A MD LINKS 🔆          '))
    console.log(chalk.whiteBright.bgMagenta.bold('=============================================='))
}

welcome();
readline.question(chalk.black.bgYellowBright.bold(`✨ Ingresa una ruta ✨:`), (route) => {

  let arrayMDFiles = [];
  resolvePaths(route);
  const fileOrDirectory = fs.lstatSync(route).isDirectory();
  // console.log((chalk.black.bgYellowBright.bold('¿Es una carpeta? 📁'), fileOrDirectory));

  if (fileOrDirectory === false) {
    console.log((chalk.black.bgYellowBright.bold('Es un archivo 📄')));
   readFile(route, arrayMDFiles);
  } else {
    console.log((chalk.black.bgYellowBright.bold('Es una carpeta 📁')));
    readDirectory(route, arrayMDFiles);
  }

  if (arrayMDFiles.length === 0) {
      return console.log((chalk.black.bgYellowBright.bold('❌ No se encontraron archivos md ❌')))
    } else {
      const pruebaDos = getLinks(arrayMDFiles);
      validateLinks(pruebaDos);
    }
})

