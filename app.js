//const http = require('http');
//const port = 3000;
//const server = http.createServer((req, res) => {
    //res.writeHead(200,{
        //'Content-Type': 'text/html'
    //});
    //res.write('Hello Word Haiiii');
    //res.end();
//});

//server.listen(port, () => {
    //console.log(`Listening is Listening on Port ${port}/`);
//});

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
res.sendFile('./index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.sendFile('./about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
    res.sendFile('./contact.html', { root: __dirname });
});

app.get('/products', (req, res) => {
    res.send ('product ID : ${req.query.id} <br> Catagory ID : ${req.params.idcat}');
});
app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>Test</h1>');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

