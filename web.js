var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var f = fs.readFileSync("index.html");
  var text = f.toString();
  response.send(f);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
