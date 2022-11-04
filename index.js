const chalk = require('chalk');
const { exit } = require('process');
const mdLinks = require('./mdLinks.js')

// creamos la interfaz que voy a utilizar para recibir y mostrar información al usuario
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const welcome = () => {
    console.log(chalk.whiteBright.bgMagenta.bold('=========================================================================='))
    console.log(chalk.whiteBright.bgMagenta.bold('                     🔆 BIENVENID@ A MD LINKS 🔆                          '))
    console.log(chalk.whiteBright.bgMagenta.bold('=========================================================================='))
    console.log(chalk.whiteBright.bgMagenta.bold(' A continuación deberas colocar una ruta y una de las siguientes opciones '))
    console.log(chalk.whiteBright.bgMagenta.bold(' --validate: Valida los links del archivo md                              '))
    console.log(chalk.whiteBright.bgMagenta.bold(' --stats: Te regresa el total de links y el número de links únicos        '))
    console.log(chalk.whiteBright.bgMagenta.bold('                                                                          '))
}

welcome();
readline.question(chalk.black.bgYellowBright.bold(`🌱Ingresa una ruta:`), (path) => {
  readline.question(chalk.black.bgYellowBright.bold(`🌱Ingresa una opción (--validate OR --stats):`), (option) => {
    if (option === '--stats' || option === '--validate'){
    mdLinks(path, option);
    } else {
      console.log(chalk.whiteBright.bgMagenta.bold('❌La opción que ingresaste no es válida❌'))
      exit()
    }
  })
})
