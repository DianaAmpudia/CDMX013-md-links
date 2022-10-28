const fs = require('fs');

const getLinks = (arrayMDFiles) => { // recibe array de archivo
  let linksData = [];
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
                // console.log('GETLINKS',linksData);
            }      
  })
  return linksData;
}

module.exports = getLinks;

