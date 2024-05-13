const http = require('http');
const hostname = "127.0.0.1";
const port = 10000;

const server = http.createServer(function (req, res) {
  res.writeHead("Content-Type": "text-plain" }); 
  res.end("Hello world\n"); 
});

server.listen(port, hostname, function () {
  console.log('server running at http://${hostname}:${port}/');
});

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello with express')
})

app.get('/login', (req, res) => {
  res.send('login page...')
})

app.use(express.static('public'));

app.listen(4000, () => {
  console.log('server started on http://localhost:4000');
})