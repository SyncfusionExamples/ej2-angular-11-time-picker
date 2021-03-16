
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the TimePickerModule for the TimePicker component
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of TimePickerModule into NgModule
  imports:      [ BrowserModule, TimePickerModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }