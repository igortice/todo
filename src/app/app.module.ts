import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { SortablejsModule } from 'angular-sortablejs';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';


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
    }),
    SortablejsModule.forRoot({ animation: 150 }),
    CoreModule
  ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
