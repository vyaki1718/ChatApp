const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const {PORT}= require('./config/server-config');




server.listen(PORT, ()=>{
    console.log(`Server runnnig on port ${PORT}`)
})