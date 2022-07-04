const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const rotas = require('./rotas');

app.use(bodyParser.json());
app.use(rotas);
app.listen(3001);

module.export = app