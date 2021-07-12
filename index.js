import { API } from './API'; 

let $text = 'Master Obiwan has lost a planet'

const getMakers = () => {
  API.post($text)
  .then((response) =>{
    const {data} = response;
    console.log(data);
  })
  .catch((err)=> {
    console.log(err);
  });
};

getMakers();


// callback
/*
request
  .post('http://api.funtranslations.com/translate/yoda')
  .send({ $text }) // sends a JSON post body
  .end((err, res) => {
    console.log(res.body);
  });
  */