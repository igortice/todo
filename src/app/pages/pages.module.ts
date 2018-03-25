import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports:      [
    CommonModule,
    RouterModule
  ],
  exports:      [ PagesComponent ],
  declarations: [ PagesComponent, HomeComponent, NotFoundComponent ]
})
export class PagesModule {}
