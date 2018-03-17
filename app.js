const express = require('express');
const http = require('http');
var bodyParser = require('body-parser');

const app = express();

// Static css/js files
app.use("/css", express.static('/Public'));
app.get("/", function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

const server = http.createServer(app);
const port = 8080;

//reload
// Start
server.listen(port, function() {
    console.log("Listening on " + port);
});