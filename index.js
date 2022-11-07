#!/usr/bin/env node
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

const endProgram = () => {
  readline.question(chalk.whiteBright.bgMagenta.bold(`¿Deseas finalizar el programa?🤔 Y/N :`), (response) => {

    if (response === 'Y' || response === 'y') {
      console.log(chalk.whiteBright.bgMagenta.bold('🔆 Gracias por usar MDLinks 🔆'));
      exit()
    } else if (response === 'N' || response === 'n') {
      console.log(chalk.whiteBright.bgMagenta.bold('🍄 Ok, ahora puedes ingresar una nueva ruta y opciones 🍄'));
      userInputs()
    }
  })
  }
  
welcome();
const userInputs = () => {readline.question(chalk.black.bgYellowBright.bold(`🌱Ingresa una ruta:`), (path) => {
  readline.question(chalk.black.bgYellowBright.bold(`🌱Ingresa una opción (--validate OR --stats):`), (option) => {
    if (option === '--stats' || option === '--validate'){
    mdLinks(path, option).then(() => {
      console.log(chalk.black.bgYellowBright.bold('MDLinks Completado 💯'));
      endProgram()
  }).catch((error) => {
      console.trace(error);
  })
    } else {
      console.log(chalk.black.bgYellowBright.bold('❌La opción que ingresaste no es válida❌'))
      exit()
    }
  })
})
}
userInputs()
