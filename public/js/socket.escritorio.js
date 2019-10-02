var socket = io();

var searchParams = new URLSearchParams(window.location.search);

console.log(searchParams.has('escritorio'));

if(!searchParams.has('escritorio')){
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
console.log(escritorio);
$('h1').text('Escritorio '+escritorio);

$('button').on('click',function(){
    socket.emit('atenderTicket',{escritorio:escritorio},function(resp){
        $('small').text('Ticket ' + resp.numero);
        console.log(resp);
        
    });
})