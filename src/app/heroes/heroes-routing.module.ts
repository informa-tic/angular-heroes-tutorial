import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesIndexPageComponent } from './pages/heroes-index-page/heroes-index-page.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesIndexPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
