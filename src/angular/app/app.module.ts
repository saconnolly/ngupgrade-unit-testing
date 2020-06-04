import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UserService} from "..";
import {UserComponent} from "../user/user.component";
import {UpgradeModule} from "@angular/upgrade/static";

@NgModule({
  imports:      [ BrowserModule, UpgradeModule ],
  declarations: [ AppComponent, UserComponent ],
  providers:    [  ],
  entryComponents: [AppComponent, UserComponent]
})
export class AppModule {
  constructor() {}

  ngDoBootstrap() {
    // We bootstrap the AngularJS app.
  }
}
