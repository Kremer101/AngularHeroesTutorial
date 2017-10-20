import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// OBservable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';

@Component({
	selector: 'hero-search',
	templateUrl: './hero-search.component.html',
	styleUrls: ['./hero-search.component.css'],
	providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {

	heroes: Observable<Hero[]>;
	private searchTerms = new Subject<string>();

	constructor(
		private heroSearchService: HeroSearchService,
		private router: Router) {}

	// Push a search term into the observable stream.
	search(term: string): void {
		this.searchTerms.next(term);
	}

	ngOnInit(): void {
		this.heroes = this.searchTerms //Self Note on fix: Needed to add asObservable due an unresolved issue with current version
			.debounceTime(300)			// wait 300 ms after each keystroke before considering the term
			.distinctUntilChanged() // ignore if next search term is the same as the previous
			.switchMap(term => term // switch to new observable each time the term changes
				// return the http search observable
				? this.heroSearchService.search(term)
				// or the observable of empty heroes if ther was no search term
				: Observable.of<Hero[]>([]))
				.catch(error => {
					// TODO: add real error handling
					console.log(error);
					return Observable.of<Hero[]>([]);
				});
				
	}

	gotoDetail(hero: Hero): void {
		let link = ['/detail', hero.id];
		this.router.navigate(link);
	}
}


