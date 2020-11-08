var socket = io();

// Escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Diana',
    mensaje: 'Hola mundo'
}, function( resp ) {
    console.log('Respuesta Server: ', resp);
});

//Escuchar información
socket.on('enviarMensaje', function( mensaje ) {
    console.log( 'Servidor:', mensaje );
});