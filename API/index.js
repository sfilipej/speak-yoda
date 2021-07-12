const request = require("superagent");

// callback
const API = 
    request
        .post('http://api.funtranslations.com/translate/yoda');

export { API };

