const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes/index');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

