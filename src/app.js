const express = require('express');
const testerRouter = require("./routers/tester");
// const taskRoutes = require("./routers/task");
require('./db/mongoose');

const app = express();


app.use(express.json());
app.use(testerRouter);
// app.use(taskRoutes);

app.get("/app", (req, res) => {
    res.status(200).send({ok: "ok"});
})

module.exports = app;