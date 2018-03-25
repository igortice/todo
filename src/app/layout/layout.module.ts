import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PagesModule } from '../pages/pages.module';

@NgModule({
  imports:      [
    CommonModule,
    PagesModule
  ],
  exports:      [ LayoutComponent ],
  declarations: [ LayoutComponent, HeaderComponent, MainComponent ]
})
export class LayoutModule {}
