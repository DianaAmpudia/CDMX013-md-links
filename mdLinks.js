const fs = require('fs')
const path = require('path')
const { exit } = require('process')
const chalk = require('chalk');

const welcome = () => {
    console.log(chalk.whiteBright.bgMagenta.bold('=============================================='))
    console.log(chalk.whiteBright.bgMagenta.bold('         🔆 BIENVENID@ A MD LINKS 🔆          '))
    console.log(chalk.whiteBright.bgMagenta.bold('=============================================='))
}
//Si es una ruta relativa convertir en absoluta
const resolvePath = (route) => {
  const pathAbsolute = path.resolve(route)
  console.log(`${pathAbsolute}`)
}
// ¿La ruta existe?
const validPath = (route) => {
  const fileExist = fs.existsSync(route) 
  if (!fileExist) {
    console.log(chalk.black.bgYellowBright.bold('❌ Esta ruta no es válida ❌'))
    exit()
  }}

const dirFiles = (folderPath) => fs.readdirSync(folderPath)

const mdFiles = file => {
    const mdFile = path.extname(file)
    if (mdFile == '.md') {
      console.log(file)
    }
  }
  // 
const pathType = (route) => {
  const fileType = fs.statSync(route)
      if (fileType.isFile()){
      console.log(chalk.black.bgYellowBright.bold( 'El archivo si existe'))
      fileExtension(route)
    } if (fileType.isDirectory()) {
      console.log(chalk.black.bgYellowBright.bold(' Se encontraron los siguientes archivos md en la carpeta: '))
      dirFiles(route).forEach(file => mdFiles(file)) 
    }
}

const fileExtension = (route) => {
if (path.extname(route) !== '.md') {
  console.log(chalk.black.bgYellowBright.bold('🔴 El archivo no es .md 🔴'))
  exit()
}  else {
  console.log(chalk.black.bgYellowBright.bold(' El archivo si es .md ') )
} 
}

module.exports.welcome = welcome;
module.exports.resolvePath = resolvePath;
module.exports.validPath = validPath;
module.exports.pathType = pathType;
module.exports.fileExtension = fileExtension;