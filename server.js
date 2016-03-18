var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.get("/", function(request, response){
  response.render("index");
});

app.listen(7777, function(){
  console.log("listening on port 7777");
});
