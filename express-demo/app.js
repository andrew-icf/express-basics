var express = require("express");
var app = express();
//getting static files
app.use(express.static('./public'));
//route
app.get('/', function(request, response){
  response.sendFile(__dirname + '/index.html');
});









app.listen(1337);
console.log("listening in port 1337");
