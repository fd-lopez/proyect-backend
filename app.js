const express = require("express");
const app = express();

const cors = require("cors");
const logger = require("morgan");

const indexRouter = require("./Routes/index");
const homeRouter = require('./Routes/home');

const {connect} = require('./db/db')

app.use(cors('*'));
app.use(logger("dev"));
app.use(express.json());
connect();

app.use('/', indexRouter)
app.use('/home', homeRouter)

module.exports = app