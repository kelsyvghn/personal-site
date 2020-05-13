const express = require('express');
const app = express();
const port = 4000;
const path = require('path');
const bodyParser = require('body-parser');

// import middleware for body parser and json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// to display static file = html
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.send('hi this is your homepage');
});

app.listen(port, () => console.log(`do you read me @ port: ${port}?`))