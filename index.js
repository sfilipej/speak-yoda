import {API} from './API';

var text = 'Master Obiwan has lost a planet'

/* const getMakers = () =>{
  API(text)
    .end((err, res) => {
      console.log(res.body);
    })
  };

getMakers();


const request = require("superagent");

// callback
const API = (frase) => {
    request
        .post('http://api.funtranslations.com/translate/yoda')
        .send(frase)
        .end((err, res)=>{console.log(res.body);});
} */
API(text);