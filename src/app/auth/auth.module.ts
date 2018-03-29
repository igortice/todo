import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { AuthService } from './auth.service';

@NgModule({
  imports:      [
    CommonModule,
    AuthRoutingModule,
  ],
  declarations: [ AuthComponent, SingInComponent, SingUpComponent ],
  providers: [
    AuthService
  ]
})
export class AuthModule {}
