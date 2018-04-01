import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { AuthGuard } from '../auth/auth.guard';

@NgModule({
  imports:      [
    CommonModule,
    CoreRoutingModule
  ],
  exports:      [
    RouterModule,
    LayoutModule
  ],
  declarations: [],
  providers:    [ AuthGuard ]
})
export class CoreModule {}
