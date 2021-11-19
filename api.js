const express = require('express');
const app = express();
var cors = require('cors');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


app.use(cors());


app.get('/api', (req, res) => {
  const link = req.query.link;
  var xhr = new XMLHttpRequest();
  var requestURL = link;
  xhr.open('GET', requestURL);
	xhr.send();
	xhr.onload = function() {
	  const pageData = xhr.response;
  }
  console.log("New GET request to /api?link=" + link + " on address: " + req.connection.remoteAddress);
  var array = [link, "test"];
  res.send({ link: array[0],
            answers: array[1] });
});


app.listen(8080, () => console.log('alive on localhost:8080'));
