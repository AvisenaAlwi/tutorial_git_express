const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World! Branch About');
});

app.get('/about', (req, res) => {
    res.send('Hallo ini halaman About');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
