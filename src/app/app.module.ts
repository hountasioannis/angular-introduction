import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, HelloComponent } from './app.component';
import { MyHelloComponentComponent } from './my-hello-component/my-hello-component.component';

@NgModule({
  declarations: [
    AppComponent, HelloComponent, MyHelloComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
