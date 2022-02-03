const { io } = require('../../server');
const {TicketControl} = require('../class/ticket-control');


const ticketControl = new TicketControl();

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.on('siguienteTicket',(data,callback)=>{
        let siguiente = ticketControl.siguiente();
        console.log('asd',siguiente);
        callback(siguiente);
    });
    client.on('atenderTicket',(data,callback)=>{
        if(!data.escritorio){
            return 'el escritorio es necesario'
        }

        let atenderTicket = ticketControl.atenderTicket(data.escritorio);
        callback(atenderTicket);
    })
    client.broadcast.emit('ultimos4',{
        ultimos4:ticketControl.getUltimos4()
    });
    client.emit('estadoActual',{
        estadoActual : ticketControl.getUltimoTicket(),
        ultimos4:ticketControl.getUltimos4()
    });

});