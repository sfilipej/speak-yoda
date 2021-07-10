const request = require("superagent");

// callback
request
  .post('http://api.funtranslations.com/translate/yoda')
  .send({ text: 'Master Obiwan has lost a planet'}) // sends a JSON post body
  .set('X-API-Key', 'foobar')
  .set('accept', 'json')
  .end((err, res) => {
    console.log(res.body);
  });