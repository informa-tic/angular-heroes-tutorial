import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesEditComponent } from './components/heroes-edit/heroes-edit.component';
import { HeroesDetailComponent } from './components/heroes-detail/heroes-detail.component';
import { HeroesIndexPageComponent } from './pages/heroes-index-page/heroes-index-page.component';

@NgModule({
  declarations: [HeroesEditComponent, HeroesDetailComponent, HeroesIndexPageComponent,],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
