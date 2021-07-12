const request = require("superagent");

// callback
const API = (frase) => {
    request
        .post('http://api.funtranslations.com/translate/yoda')
        .send(frase)
        .end((err, res)=>{console.log(res.body);});
};
    

export { API };