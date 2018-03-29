import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { CardComponent } from './card/card.component';
import { SortablejsModule } from 'angular-sortablejs';
import { FormsModule } from '@angular/forms';
import { CardService } from '../models/card/card.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
  imports:      [
    CommonModule,
    RouterModule,
    SortablejsModule,
    FormsModule
  ],
  exports:      [ PagesComponent, RouterModule ],
  declarations: [ PagesComponent, HomeComponent, NotFoundComponent, AboutComponent, CardComponent ],
  providers:    [ CardService, AuthService ]
})
export class PagesModule {}
