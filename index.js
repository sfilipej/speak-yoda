import {API} from './API';

var text = 'Master Obiwan has lost a planet'

const getMakers = () =>{
  API.send(text)
    .end((err, res) => {
      console.log(res.body);
    })
  };

getMakers();