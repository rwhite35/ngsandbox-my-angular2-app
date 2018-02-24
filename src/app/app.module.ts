import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ModelFormComponent} from './shared/ModelFormComponent';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      ModelFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
