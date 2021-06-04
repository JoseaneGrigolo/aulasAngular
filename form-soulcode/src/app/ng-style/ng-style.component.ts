import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {
  myColor!: string
  myFonteSize: string = '10px';

  changeColor(event: any) {
    console.log(event)
    this.myColor = event.target.value;

  }

  changeFonteSize(event: any){
    this.myFonteSize = event.target.checked ? event.target.value : '10px';

  }
}
