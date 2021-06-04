import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent {

  users = [
    {name: 'Josie', age: 3, isAdmin: true},
    {name: 'Osmar', age: 5, isAdmin: false},
    {name: 'Sarah', age: 35, isAdmin: true},
    {name: 'Elma', age: 53, isAdmin: false}
  ]


}
