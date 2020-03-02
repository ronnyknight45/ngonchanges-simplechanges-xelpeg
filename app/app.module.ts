import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, DirectiveListen } from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, DirectiveListen ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
