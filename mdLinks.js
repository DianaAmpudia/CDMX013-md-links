const chalk = require('chalk');
const fs = require('fs');
const resolvePaths = require('./src/resolvePath.js')
const readDirectory = require('./src/readDirectory.js')
const readFile = require('./src/readFile.js') 
const getLinks = require('./src/getLinks.js')
const validateLinks = require('./src/validateLinks.js')
const linkStats = require('./src/getStats.js');
const { exit } = require('process');


const mdLinks = (route, option) => {
    return new Promise((resolve, reject) => {

        let arrayMDFiles = [];
        
        resolvePaths(route);
        const fileOrDirectory = fs.lstatSync(route).isDirectory();

      
        if (fileOrDirectory === false) {
          console.log((chalk.black.bgYellowBright.bold('Es un archivo 📄')));
         readFile(route, arrayMDFiles);
        } else if (fileOrDirectory === true) {
          console.log((chalk.black.bgYellowBright.bold('Es una carpeta 📁')));
          readDirectory(route, arrayMDFiles);
        }

        if (arrayMDFiles.length === 0) {
            console.log((chalk.black.bgYellowBright.bold('❌ No se encontraron archivos md ❌'))) }

        if (option === undefined){
            resolve (mdLinks)
        }else if(option === '--validate'){
            const arrayLinks = getLinks(arrayMDFiles);
            resolve (validateLinks(arrayLinks))
        }
        else if(option === '--stats'){
            const arrayLinks = getLinks(arrayMDFiles);
            resolve (linkStats(arrayLinks))
        }
        else if(option === '--validate --stats'){
            const arrayLinks = getLinks(arrayMDFiles);
            resolve (validateLinks(arrayLinks))
            resolve (linkStats(arrayLinks))
        } else reject 
    })
}

module.exports = mdLinks;