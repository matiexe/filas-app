

class TicketControl{
    

    constructor(){
        this.ultimo   = 0;
        this.hoy      = new Date().getDate();
        this.tickets  = [];
        this.ultimos4 = [];


        this.init()

    }

    init(){
        const {hoy,tickets,ultimo,ultimos4} = require('../data/data.json')
        if(hoy === this.hoy){
            this.tickets = tickets,
            this.ultimo = ultimo,
            this.ultimos4 = ultimos4
        }else{
            this.guardarDb();
        }
    }
    get toJson(){
        return{
            ultimo   = this.ultimo,
            hoy      = this.hoy,
            tickets  = this.tickets,
            ultimos4 = this.ultimos4
        }
    }

    guardarDb(){}


}

module.exports = TicketControl