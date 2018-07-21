'use strict';

const port = 3000;
const server = require('./config/server');//não preciso colocar .js
const express = require('express');
const path = require('path');
const Job = require('./model/job');


server.use('/vjobs', express.static(__dirname + '/app/static'));

//DEFAULT ENDPOINT - GET RAIZ DA APLICAÇÃO
server.get('/', async (req, res) => {
    return res.redirect('http://localhost:3000/vjobs/index.html');
})

//LISTEN
server.listen(port, () => {
    console.log(`Server listening on port '${port}'.`);
    console.log(`URL: http://localhost:${port}`);
})

