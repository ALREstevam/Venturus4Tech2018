'use strict';

const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const consign = require('consign')


//Declaração do bodypareser
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

//Decçaração do consign e inclusão de módulos
consign()
    .include('./config/firebaseConfig.js')
    .then('./app/static/routes')
    .into(server)

    
//Exportar app
module.exports = server;