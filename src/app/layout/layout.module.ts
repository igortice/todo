import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports:      [
    CommonModule
  ],
  exports:      [ LayoutComponent ],
  declarations: [ LayoutComponent, HeaderComponent, MainComponent ]
})
export class LayoutModule {}
