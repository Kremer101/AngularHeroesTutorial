import { Component } from '@angular/core';
import { Hero } from './hero'

const HEROES: Hero[] = [
	{id: 0, name: 'Ana'},
	{id: 1, name: 'Bastion'},
	{id: 2, name: 'D.Va'},
	{id: 3, name: 'Doomfist'},
	{id: 4, name: 'Genji'},
	{id: 5, name: 'Hanzo'},
	{id: 6, name: 'Junkrat'},
	{id: 7, name: 'Lucio'},
	{id: 8, name: 'Mcree'},
	{id: 9, name: 'Mei'},
	{id: 10, name: 'Mercy'},
	{id: 11, name: 'Orisa'},
	{id: 12, name: 'Pharah'},
	{id: 13, name: 'Reaper'},
	{id: 14, name: 'Reinhardt'},
	{id: 15, name: 'Roadhog'},
	{id: 16, name: 'Soldier 76'},
	{id: 17, name: 'Sombra'},
	{id: 18, name: 'Symmetra'},
	{id: 19, name: 'Torbjorn'},
	{id: 20, name: 'Tracer'},
	{id: 21, name: 'Widowmaker'},
	{id: 22, name: 'Winston'},
	{id: 23, name: 'Zarya'},
	{id: 24, name: 'Zenyatta'},
];

@Component({
  	selector: 'my-app',
  	template: `
  			<h1>{{title}}</h1>
  			<h2>My Heroes</h2>
  			<ul class="heroes">
  				<li *ngFor="let hero of heroes"
  					[class.selected] ="hero===selectedHero"
  					(click)="onSelect(hero)">
  				<span class="badge">{{hero.id}}</span> {{hero.name}}
  				</li>
  			</ul>
  			<hero-detail [hero]="selectedHero"></hero-detail>
  			`,
  	styles: [`
  		.selected {
  			background-color: #CFD8C !important;
  			color: white;
  		}
  		.heroes {
    		margin: 0 0 2em 0;
    		list-style-type: none;
    		padding: 0;
    		width: 15em;
  		}
  		.heroes li {
    		cursor: pointer;
    		position: relative;
    		left: 0;
		    background-color: #EEE;
    		margin: .5em;
		    padding: .3em 0;
		    height: 1.6em;
		    border-radius: 4px;
  		}
  		.heroes li.selected:hover {
    		background-color: #BBD8DC !important;
    		color: white;
  		}
  		.heroes li:hover {
    		color: #607D8B;
    		background-color: #DDD;
    		left: .1em;
  		}
  		.heroes .text {
    		position: relative;
    		top: -3px;
  		}
  		.heroes .badge {
    		display: inline-block;
    		font-size: small;
    		color: white;
    		padding: 0.8em 0.7em 0 0.7em;
    		background-color: #607D8B;
    		line-height: 1em;
    		position: relative;
    		left: -1px;
    		top: -4px;
    		height: 1.8em;
    		margin-right: .8em;
    		border-radius: 4px 0 0 4px;
  		}
  	`]
})

export class AppComponent  { 
	title = 'Heroes of Overwatch';
	heroes = HEROES;
	selectedHero: Hero;

	onSelect(hero:Hero): void {
		this.selectedHero = hero;
	}
}



