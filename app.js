const express = require('express');
const expressLayout = require('express-ejs-layouts');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayout);
app.use('layout', 'layout/main-layout');
app.get('/about', (req, res) => {
    res.sendFile('./index', { root: __dirname });
});

    // const mahasiswa = [
    //     {
    //         nama: 'Ade',
    //         email: 'ade@gmail.com',
    //     },
    //     {
    //         nama: 'Asep',
    //         email: 'asep@gmail.com',
    //     },
    //     {
    //         nama: 'Agus',
    //         email: 'agus@gmail.com',
    //     },
    // ];
    res.render('index', {
        nama: 'Ade',
        title: 'Halaman Home',
    });

app.get('/about', (req, res) => {
    res.sendFile('./about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
    res.sendFile('./contact.html', { root: __dirname });
});

app.get('/products/:id', (req, res) => {
    res.send ('product ID : ${req.query.id} <br> Catagory ID : ${req.params.idcat}');
});
app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>Test</h1>');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
