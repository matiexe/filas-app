//Coma
var socket = io();
var label = $('#lblNuevoTicket');
socket.on('connect',function(){
    console.log("conectado al servidor");
})

socket.on('unconnect',function(){
    console.log('desconectado del servidor');
});
socket.on('estadoActual',function(estadoActual){
    label.text(estadoActual.estadoActual);
});
$('button').on('click',function(){
    socket.emit('siguienteTicket',null,function(siguienteTicket){
        label.text(siguienteTicket);
    });
})