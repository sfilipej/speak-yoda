//import {API} from './API';
import prompts from 'prompts';


 const request = require("superagent");
 /*
var frase = 'Master Obiwan has lost a planet'
// callback

    request
        .post('http://api.funtranslations.com/translate/yoda')
        .send({text: frase})
        .end((err, res)=>{console.log(res.body);}); */

(async () => {
  const response = await prompts({
    type: 'text',
    name: 'Yoda',
    message: 'What you want Yoda to translate?'
  });
  var frase = response;

  request
        .post('http://api.funtranslations.com/translate/yoda')
        .send({text: frase})
        .end((err, res)=>{console.log(res.body);}); 
        
  //API(frase.Yoda)
})();