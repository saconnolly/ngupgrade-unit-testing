import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UserService} from "..";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  providers:    [  ],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor() {}

  ngDoBootstrap() {
    // We bootstrap the AngularJS app.
  }
}
