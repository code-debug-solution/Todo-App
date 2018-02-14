const express = require("express");
const environment = require('./src/environments/environment.prod');

const app = express();

app.use(express.static(__dirname + "/dist"));
app.listen(process.env.PORT || 8080);
