const express = require('express');
const http = require('http');
const path = require('path');
const app = express();

//app.use('/Public', express.static('/Public'));
app.use(express.static(path.join(__dirname, 'Public')));
app.get("/", function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

const server = http.createServer(app);
server.listen(3000, () => console.log('Server Started - Listening to 3000'));
