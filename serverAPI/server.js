// connect db to server 
// const express = require('express');
const mongoose = require('mongoose');
const app = require('./app');
// const app = express();

// connect to mongoDB
mongoose.connect('mongodb://127.0.0.1:27017/sneat')

//successful connection
mongoose.connection.on('open',()=>{
  console.log('connected to mongoDB');
})
//error connection
mongoose.connection.on('error',()=>{
  console.log('mongoDB connection error');
})

// create express server app
app.listen(80,()=>{
  console.log('server is running on http://127.0.0.1');  
})