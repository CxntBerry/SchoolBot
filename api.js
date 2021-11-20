const express = require('express');
const app = express();
var cors = require('cors');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


app.use(cors());


app.get('/api', (req, res) => {
  const link = req.query.link;

  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open("GET", link);
  xhr.withCredentials = false;
  xhr.setRequestHeader('Host', 'brainly.com');
  xhr.setRequestHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0');
  xhr.setRequestHeader('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8');
  xhr.setRequestHeader('Accept-Language', 'en-US,en;q=0.5');
  xhr.setRequestHeader('Connection', 'close');
  xhr.setRequestHeader('DNT', '1');
  xhr.setRequestHeader('Upgrade-Insecure-Requests', '1');
  xhr.setRequestHeader('Sec-Fetch-Dest', 'document');
  xhr.setRequestHeader('Sec-Fetch-Mode', 'navigate');
  xhr.setRequestHeader('Sec-Fetch-Site', 'none');
  xhr.setRequestHeader('Sec-Fetch-User', '?1');
  xhr.onload = function() {
	   console.log(xhr.status);
     var scrapedData = {1:xhr.responseText};
     var array = [link, scrapedData];
     res.send({ link: array[0],
               answers: array[1] });
	};
  xhr.send();
  //_lr_geo_location=US
  console.log("New GET request to /api?link=" + link + " on address: " + req.connection.remoteAddress);


});


app.listen(8080, () => console.log('alive on localhost:8080'));
