import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BModule } from '../Bmodule/b/b.module';
import { ServiceService } from '../services/service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BModule
  ],
  providers:[ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
