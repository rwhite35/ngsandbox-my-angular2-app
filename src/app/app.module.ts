import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CreateStep1Component } from './create-step1/create-step1.component';
import {CreateStep1FieldComponent} from './create-step1/create-step1-field.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateStep1Component,
    CreateStep1FieldComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
