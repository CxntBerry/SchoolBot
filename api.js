const express = require('express');
const app = express();
var cors = require('cors');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


app.use(cors());


app.get('/api', (req, res) => {
  const link = req.query.link;

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
	   console.log("State: " + this.readyState);
	    if (this.readyState === 4) {
		    console.log("Complete.\nBody length: " + this.responseText.length);
		    console.log("Body:\n" + this.responseBody);
	    }
  };
  xhr.open("GET", link);
  xhr.send();

  console.log("New GET request to /api?link=" + link + " on address: " + req.connection.remoteAddress);

  var scrapedData = {1:"test", 2:"ddd"};
  var array = [link, scrapedData];
  res.send({ link: array[0],
            answers: array[1] });
});


app.listen(8080, () => console.log('alive on localhost:8080'));
