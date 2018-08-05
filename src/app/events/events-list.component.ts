import {Component} from '@angular/core'

@Component({
    selector:'events-List',
    templateUrl: './events-list.component.html',
})
export  class EventslistComponent{

    event1={
        id:1,
        name :'angular connect',
        date :'9/26/2019',
        time :'10:00 am',
        price:599.99,
        imageUrl : '/assets/images/angularconnect-shield.png',
        location:{
            address:'1057 DT',
            city:'london',
            country:'England'
        }

    }
   
}