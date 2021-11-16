const express = require("express");
const app = express();
const bodyParser = require('body-parser');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;



app.get("/", function (req, res) {
    res.set("Referrer-Policy", "no-referrer");
    res.append('Content-Type', 'application/x-www-form-urlencoded');
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'POST');
    res.append('Access-Control-Allow-Headers', 'Content-Type');



});

app.listen(8080, function (req, res) {
  console.log("Server is running");
});
//res.end(JSON.stringify({ test: 3 }));


//need to set header to cors-allow
