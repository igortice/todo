import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { AboutComponent } from '../pages/about/about.component';
import { CardComponent } from '../pages/card/card.component';

const routes: Routes = [
  { path: '', redirectTo: 'cards', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cards', component: CardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'auth', loadChildren: '../auth/auth.module#AuthModule' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class CoreRoutingModule {}
