import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports:      [
    BrowserModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-full-width',
      easeTime:      500,
      timeOut:       1500,
      progressBar:   true
    })
  ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
