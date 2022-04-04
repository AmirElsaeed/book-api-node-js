const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const storeRoute = require('./route/store.route');
const bookRoute = require('./route/book.route');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const port = process.env.PORT;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/v1', storeRoute);
app.use('/api/v1', bookRoute);

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});