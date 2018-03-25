import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports:      [
    CommonModule,
    RouterModule
  ],
  exports:      [ PagesComponent, RouterModule ],
  declarations: [ PagesComponent, HomeComponent, NotFoundComponent, AboutComponent ]
})
export class PagesModule {}
