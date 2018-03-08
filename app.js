const express = require('express');
const reload = require('reload');
const http = require('http');
var bodyParser = require('body-parser');


const app = express();

// Static css/js files
app.use(express.static('Public'));
app.use(bodyParser.json());
app.get("/", function(req, res) {
    res.sendFile(__dirname + '/public/html/index.html');
});

const server = http.createServer(app);
const port = 8080;

//reload
reload(app);
// Start
server.listen(port, function() {
    console.log("Listening on " + port);
});