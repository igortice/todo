import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports:      [
    CommonModule,
    CoreRoutingModule
  ],
  exports:      [
    RouterModule,
    LayoutModule
  ],
  declarations: []
})
export class CoreModule {}
