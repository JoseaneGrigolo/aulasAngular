import { Component } from '@angular/core';

@Component({
  selector: 'app-event-emit',
  templateUrl: './event-emit.component.html',
  styleUrls: ['./event-emit.component.css']
})
export class EventEmitComponent {
  sendMessage(event: any){
    alert(`O número recebido foi ${event}`)
  }
}
