import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PagesModule } from '../pages/pages.module';
import { AuthService } from '../auth/auth.service';

@NgModule({
  imports:      [
    CommonModule,
    PagesModule
  ],
  exports:      [ LayoutComponent ],
  declarations: [ LayoutComponent, HeaderComponent, MainComponent ],
  providers:    [ AuthService ]
})
export class LayoutModule {}
