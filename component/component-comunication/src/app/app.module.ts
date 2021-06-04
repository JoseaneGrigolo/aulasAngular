import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { EventEmitComponent } from './event-emit/event-emit.component';
import { AuxiliarComponent } from './event-emit/auxiliar/auxiliar.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBindingComponent,
    EventEmitComponent,
    AuxiliarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
