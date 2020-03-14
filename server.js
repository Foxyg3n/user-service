const http = require('http');
const port = 80;


const server = http.createServer((req, res) => {

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World');
  res.end();

});

server.listen(port);

console.log('Server is running...');