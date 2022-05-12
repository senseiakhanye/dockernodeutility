const express = require('express');
const testerRouter = require("./routers/tester");

const app = express();

app.use(express.json());
app.use(testerRouter);

module.exports = app;