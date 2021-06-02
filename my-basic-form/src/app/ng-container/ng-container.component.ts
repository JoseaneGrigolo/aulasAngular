import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent {
  users = [
    {
      name: "",
      lastname: "",
      age: "",
      cpf: "",
      email: "",
      password: ""
    }
  ]
}
