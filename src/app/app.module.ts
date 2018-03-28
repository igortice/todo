import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { SortablejsModule } from 'angular-sortablejs';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(localePt, 'pt-BR');


@NgModule({
  declarations: [
    AppComponent
  ],
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
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
  providers:    [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
