"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HEROES = [
    { id: 0, name: 'Ana' },
    { id: 1, name: 'Bastion' },
    { id: 2, name: 'D.Va' },
    { id: 3, name: 'Doomfist' },
    { id: 4, name: 'Genji' },
    { id: 5, name: 'Hanzo' },
    { id: 6, name: 'Junkrat' },
    { id: 7, name: 'Lucio' },
    { id: 8, name: 'Mcree' },
    { id: 9, name: 'Mei' },
    { id: 10, name: 'Mercy' },
    { id: 11, name: 'Orisa' },
    { id: 12, name: 'Pharah' },
    { id: 13, name: 'Reaper' },
    { id: 14, name: 'Reinhardt' },
    { id: 15, name: 'Roadhog' },
    { id: 16, name: 'Soldier 76' },
    { id: 17, name: 'Sombra' },
    { id: 18, name: 'Symmetra' },
    { id: 19, name: 'Torbjorn' },
    { id: 20, name: 'Tracer' },
    { id: 21, name: 'Widowmaker' },
    { id: 22, name: 'Winston' },
    { id: 23, name: 'Zarya' },
    { id: 24, name: 'Zenyatta' },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Heroes of Overwatch';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  \t\t\t<h1>{{title}}</h1>\n  \t\t\t<h2>My Heroes</h2>\n  \t\t\t<ul class=\"heroes\">\n  \t\t\t\t<li *ngFor=\"let hero of heroes\"\n  \t\t\t\t\t[class.selected] =\"hero===selectedHero\"\n  \t\t\t\t\t(click)=\"onSelect(hero)\">\n  \t\t\t\t<span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n  \t\t\t\t</li>\n  \t\t\t</ul>\n  \t\t\t<hero-detail [hero]=\"selectedHero\"></hero-detail>\n  \t\t\t",
        styles: ["\n  \t\t.selected {\n  \t\t\tbackground-color: #CFD8C !important;\n  \t\t\tcolor: white;\n  \t\t}\n  \t\t.heroes {\n    \t\tmargin: 0 0 2em 0;\n    \t\tlist-style-type: none;\n    \t\tpadding: 0;\n    \t\twidth: 15em;\n  \t\t}\n  \t\t.heroes li {\n    \t\tcursor: pointer;\n    \t\tposition: relative;\n    \t\tleft: 0;\n\t\t    background-color: #EEE;\n    \t\tmargin: .5em;\n\t\t    padding: .3em 0;\n\t\t    height: 1.6em;\n\t\t    border-radius: 4px;\n  \t\t}\n  \t\t.heroes li.selected:hover {\n    \t\tbackground-color: #BBD8DC !important;\n    \t\tcolor: white;\n  \t\t}\n  \t\t.heroes li:hover {\n    \t\tcolor: #607D8B;\n    \t\tbackground-color: #DDD;\n    \t\tleft: .1em;\n  \t\t}\n  \t\t.heroes .text {\n    \t\tposition: relative;\n    \t\ttop: -3px;\n  \t\t}\n  \t\t.heroes .badge {\n    \t\tdisplay: inline-block;\n    \t\tfont-size: small;\n    \t\tcolor: white;\n    \t\tpadding: 0.8em 0.7em 0 0.7em;\n    \t\tbackground-color: #607D8B;\n    \t\tline-height: 1em;\n    \t\tposition: relative;\n    \t\tleft: -1px;\n    \t\ttop: -4px;\n    \t\theight: 1.8em;\n    \t\tmargin-right: .8em;\n    \t\tborder-radius: 4px 0 0 4px;\n  \t\t}\n  \t"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map