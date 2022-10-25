const fs = require('fs');

let linksData = []
const getLinks = (arrayMDFiles) => { // recibe array de archivo

  arrayMDFiles.forEach((mdFile) => {
    const data = fs.readFileSync(mdFile, 'utf8');
    // console.log(data);  //leer el archivo
    const regExp = /\[(.+)\]\((https?:\/\/.+)\)/gi;
            let arrayLinks = [...data.matchAll(regExp)]

            if (arrayLinks.length > 0) {
                arrayLinks.forEach(link => {
                    linksData.push({
                        href: link[2],
                        text: link[1],
                        file: arrayMDFiles
                    })
                })
                console.log('info links',linksData)
            } 
            
  })
}

module.exports = getLinks;