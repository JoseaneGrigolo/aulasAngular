import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  users = [
    {name: 'J', age: 3, isAdmin: true},
    {name: 'o', age: 5, isAdmin: false},
    {name: 's', age: 35, isAdmin: true},
    {name: 'e', age: 53, isAdmin: false}
  ]

}
