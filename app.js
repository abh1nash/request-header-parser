// server.js
// where your node app starts

// init project
const bodyparser = require('body-parser');
const express = require('express');
const app = express();


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

app.use(bodyparser.json());

app.get('/api/whoami/', (req, res) => {
  let language = req.headers["accept-language"];
  let software = req.headers["user-agent"];
  let ipaddress = req.headers['x-forwarded-for'];
  
  res.send({ipaddress, software, language});
  
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
