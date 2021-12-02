
function Hotel(name, rooms, booked){
    this.name = name
    this.rooms = rooms
    this.booked = booked
    this.pool = true
    this.gym = true
    this.checkAvailability = function(){
        return this.rooms - this.booked
    }
}

let blueHotel = new Hotel('Blue Hotel', 120, 70, true, true)

let detailsBlue = blueHotel.name+'<br/>'+ ' Rooms: '
detailsBlue += blueHotel.checkAvailability()+'<br/>'

detailsBlue+= blueHotel.pool?' Piscina / ':''
detailsBlue+= blueHotel.gym? ' Sala de Ginástica':""

let elHotelBlue = document.querySelector('#card')
elHotelBlue.innerHTML = detailsBlue


class DateTime {
    constructor() {
        this._date = document.querySelector('#date')
        this._hour = document.querySelector('#timer')
        this._currentTime
        this.startTime()
        this._locale = 'pt-BR'
    }

    configTime(){
        this.date= this.currentTime.toLocaleDateString(this._locale,{
            day:'2-digit',
            month:'long',
            year:'numeric'

        })
        this.hour=this.currentTime.toLocaleTimeString(this._locale)
    }

   startTime() {
       this.configTime()
       setInterval(()=>{
           this.configTime()
       },1000)
        
    }

    get date(){
        return this._date.innerHTML
    }
    set date(value){
        return this._date.innerHTML=value
    }

    get hour(){
        return this._hour.innerHTML
    }
    set hour(value){
        return this._hour.innerHTML=value
    }

    get currentTime(){
        return new Date()
    }
    set currentTime(today){
        return this._currentTime.innerHTML=today
    }
}


window.date= new DateTime

