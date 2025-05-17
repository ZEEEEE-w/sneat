// client related routes and middleware

const express = require('express');  
const homeRouter = require('./routes/homeRoute');
const bodyParser = require('body-parser');
const cors = require('cors');

// create server app for server.js
const app = express();

// middleware
app.use(cors())
app.use(bodyParser.json())

//
app.use(homeRouter)

module.exports = app;
