import {Component, Input} from 'angular2/core';
import {Hero} from './hero';

//*ngIf="variable" then populate all nested elements in this block
@Component({
  selector: 'my-hero-detail',
  template:`
  		<div *ngIf="selectedHero">
	      <h2>{{selectedHero.name}} details!</h2>
	      <div><label>id: </label>{{selectedHero.id}}</div>
	      <div>
	        <label>name: </label>
	        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
	      </div>
	    </div>
	    `
})
export class HeroDetailComponent {
  @Input() 
  hero: Hero;
}

constructor(private _heroService: HeroService) { }
getHeroes() {
    this.heroes = this._heroService.getHeroes();
}