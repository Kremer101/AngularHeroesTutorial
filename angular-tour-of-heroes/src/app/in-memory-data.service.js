"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
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
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map