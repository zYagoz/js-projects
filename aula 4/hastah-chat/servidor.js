const http = require('http');
const express = require('express');
const exp = require('constants');
const aplicacao = express();



const servidorHttp = http.createServer(aplicacao);
const io = require('socket.io')(servidorHttp);

io.addListener('connection', (socket) => {
    console.log('um usuário conectou')
    socket.addListener('nova mensagem', (msg) => {
        io.emit('nova mensagem', msg);

    })
})

aplicacao.use(express.static('public'));

servidorHttp.listen(1000 , '192.168.15.4');