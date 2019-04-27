import { Component, OnInit } from '@angular/core';
import { HEROES } from '../../shared/models/mock-heroes';
import { Hero } from '../../shared/models/heroes';

@Component({
  selector: 'app-heroes-index-page',
  templateUrl: './heroes-index-page.component.html',
  styleUrls: ['./heroes-index-page.component.css']
})
export class HeroesIndexPageComponent implements OnInit {
  
  selectedHero: Hero;
  heroes = HEROES

  constructor() { }

  ngOnInit() {
  }

  onSelected(hero: Hero): void {
    this.selectedHero = hero
  }
}
