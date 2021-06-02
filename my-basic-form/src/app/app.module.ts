import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyInputComponent } from './my-input/my-input.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgContentComponent } from './ng-content/ng-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MyInputComponent,
    MyButtonComponent,
    NgContainerComponent,
    NgContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }