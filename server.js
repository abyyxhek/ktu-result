const express = require('express');
const app = express();
const path = require('path');
const results = require('./data/mockResults.json');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/result', (req, res) => {
    const regNo = req.body.regno;
    const student = results[regNo];
    if (student) {
        res.render('result', { student });
    } else {
        res.render('index', { error: 'Result not found!' });
    }
});

app.listen(3000, () => {
    console.log('KTU Result Clone running on http://localhost:3000');
});
