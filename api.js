const express = require('express');
const app = express();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

app.get('/api', (req, res) => {
  const link = req.query.link;
  var xhr = new XMLHttpRequest();
  var requestURL = link;
  xhr.open('GET', requestURL);
	xhr.send();
	xhr.onload = function() {
	  const pageData = xhr.response;
    var array = [link, pageData];
    res.send({ link: array[0],
              answers: array[1] });
  }

});

app.listen(8080, () => console.log('alive on localhost:8080'));
