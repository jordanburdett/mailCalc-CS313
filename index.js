const express = require('express')
const path = require('path')
var bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000

express()
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .post('/mailCost', calcMailCost)
  .listen(PORT, () => console.log(`Listening on ${PORT}`));



  function calcMailCost(requests, response) {
    console.log(requests.body);
    let weight = requests.body.weight;
    let type   = requests.body.type;


    var answer = weight;

    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('<h1>' + answer + '</h1>');
    response.end();
  }
