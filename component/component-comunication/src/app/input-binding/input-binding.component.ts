import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent {
 @Input()
  title:string = "";

  @Input("myName")
  name: string ="";


}
