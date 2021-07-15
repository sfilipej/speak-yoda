import axios from "axios";
/* import { SuperAgent } from "superagent"; */

// callback
const API = (frase) => {
    return
    axios
        .post('http://api.funtranslations.com/translate/yoda', {text: frase})
        .then(response => {
            console.log(response.body);
        })
        .catch('Erro!');
        
};
    
export { API };