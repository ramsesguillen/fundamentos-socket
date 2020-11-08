const express = require('express');

const app = express();
const path = require('path');

const server = require('http').createServer(app);

// IO = esta es la comunicación del backend
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));



server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);
    console.log(`http://localhost:${ port }`);

});
