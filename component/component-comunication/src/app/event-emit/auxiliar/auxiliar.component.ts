import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auxiliar',
  templateUrl: './auxiliar.component.html',
  styleUrls: ['./auxiliar.component.css']
})
export class AuxiliarComponent  {
  @Output()
  myEvent = new EventEmitter<any>()

 sendEvent(n:number){
   this.myEvent.emit(n);
 }

}
