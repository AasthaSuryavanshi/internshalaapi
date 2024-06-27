require ("dotenv").config({path:'./.env'})
const { config } = require('dotenv');
const express = require('express');
const app = express();

//logger
const logger = require("morgan")
app.use(logger("tiny"))


app.get('/', require('./routers/indexRouter'))

app.listen(process.env.PORT,console.log(`server is running on ${process.env.PORT}`));