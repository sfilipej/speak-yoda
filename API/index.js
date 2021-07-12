const request = require("superagent");

// callback
export const API = 
    request
        .post('http://api.funtranslations.com/translate/yoda')
        .send({ $text }) // sends a JSON post body
    ;