import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'my-first-app'
  user = {
    age: 35,
    gender: 'F',
    name: 'Joseane'
  }
  isDisabled: boolean = true
  name:string = ''

  save(event: any) {
    console.log(event)
  }
}
