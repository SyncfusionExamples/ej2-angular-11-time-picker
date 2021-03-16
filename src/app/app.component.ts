
import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';

//enable ripple style
enableRipple(true);

@Component({
  selector: 'app-root',
  template: `<!-- To Render TimePicker -->
             <ejs-timepicker></ejs-timepicker>`
})
export class AppComponent  { }