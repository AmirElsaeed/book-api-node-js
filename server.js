const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const noteRoute = require('./route/store.route');

const app = express();
const port = process.env.PORT;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/v1', noteRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});