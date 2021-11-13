const express = require("express");
const app = express();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.listen(8080, function () {
    var link = "https://brainly.com/question/185500"
    var request = new XMLHttpRequest();
    request.open('GET', link);
  	request.send();
  	request.onload = function() {
  	  console.log(request.response)
  	  //send website address to custom api
  		//return a call to a function on a custom api that searches for answers in website.
  	}

    console.log("Server is running on localhost3000");
    var Answers = {}; //an array of answers to return
    return Answers
});



//need to set header to cors-allow
