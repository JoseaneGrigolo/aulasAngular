import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  //Necessário inicializar
  public addToList: string = '';
  public adicionados: string[] = [];
  public list: string[] = [];

  //CRUD
  postMylist() {
    this.list.push(this.addToList);
  }

  //The splice() method also works well when looking to remove values from an array by index.
  contador(index: number) {
    this.adicionados.push(this.list[index]);
    this.list.splice(index, 1);
  }

  //The shift () method removes the first item of an array. 
  deleteAdicionado() {
    this.adicionados.shift()
  }

}
