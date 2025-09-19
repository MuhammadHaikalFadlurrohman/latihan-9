const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
    res.writeHead(200,{
        'Content-Type': 'text/html'
    });
    res.write('Hello Word Haiiii');
    res.end();
});

server.listen(port, () => {
    console.log(`Listening is Listening on Port ${port}/`);
});


