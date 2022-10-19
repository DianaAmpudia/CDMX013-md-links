// module.exports = () => {
//   // ...
// };

// const { exit } = require('process')
//creamos la interfaz que voy a utilizar para recibir y mostrar información al usuario
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
const mdLinks = require('./mdLinks')
const chalk = require('chalk');

mdLinks.welcome()
readline.question(chalk.black.bgYellowBright.bold(`✨ Ingresa una ruta ✨:`), (route) => {
mdLinks.resolvePath(route)
mdLinks.validPath(route)
mdLinks.pathType(route) 
// exit()
})
