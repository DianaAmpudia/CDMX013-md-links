const axios = require('axios');
const chalk = require('chalk');

const validateLinks = (arrayLinks) => {
    let linksValidationRequest = Promise.all(arrayLinks.map((object) => {
      return axios.get(object.href).then(res => {
        const statusObj = {
          ...object,
          status: res.status,
          ok: 'ok',
        };
        return console.log((chalk.black.bgYellowBright.bold('🟢 STATUS 200 🟢')), statusObj);
      }).catch( error => {
          const statusObj = {
            ...object,
            status: 404,
            ok: 'fail',
          };
          return console.log((chalk.black.bgYellowBright.bold('🔴 STATUS 404 🔴')), statusObj);
      });
    }));
    return linksValidationRequest
  }; 

  module.exports = validateLinks;