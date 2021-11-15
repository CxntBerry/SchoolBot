const express = require("express");
const app = express();
const bodyParser = require('body-parser');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


app.use(express.json());
/*
app.post('/', (req, res) => {
  req.body; // JavaScript object containing the parse JSON
  res.json(req.body);
  console.log('Got req body:', req.body);
  console.log('Got res body:', res.body);
  res.send("DATA_HERE");
});*/
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.php");
    res.set("Referrer-Policy", "no-referrer");
    res.append('Content-Type', 'application/json');
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');



});

app.listen(8080, function (req, res) {
    var link = "https://brainly.com/question/185500";
    var request = new XMLHttpRequest();
    request.open('GET', link);
  	request.send();
  	request.onload = function() {
  	  console.log("Server is running");
  	}
});
//res.end(JSON.stringify({ test: 3 }));


//need to set header to cors-allow
