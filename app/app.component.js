System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Hero, HEROES, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Hero = (function () {
                function Hero() {
                }
                return Hero;
            }());
            exports_1("Hero", Hero);
            HEROES = [
                { "id": 11, "name": "Mr. Nice" },
                { "id": 12, "name": "Narco" },
                { "id": 13, "name": "Bombasto" },
                { "id": 14, "name": "Celeritas" },
                { "id": 15, "name": "Magneta" },
                { "id": 16, "name": "RubberMan" },
                { "id": 17, "name": "Dynama" },
                { "id": 18, "name": "Dr IQ" },
                { "id": 19, "name": "Magma" },
                { "id": 20, "name": "Tornado" }
            ];
            //{{}} One way data binding
            //[(ngModel)] Two way data binding
            //*ngFor='#var of list/array' iterate through list
            //(function)=functionDef I.E (click)="onSelect(hero)"
            //*ngIf="variable" then populate all nested elements in this block
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Heroes';
                    this.heroes = HEROES;
                }
                AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t    <h1>{{title}}</h1>\n\t    <h2>My Heroes</h2>\n\t    <ul class=\"heroes\">\n\t      <li *ngFor=\"#hero of heroes\"\n\t        [class.selected]=\"hero === selectedHero\"\n\t        (click)=\"onSelect(hero)\">\n\t        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n\t      </li>\n\t    </ul>\n\t    <div *ngIf=\"selectedHero\">\n\t      <h2>{{selectedHero.name}} details!</h2>\n\t      <div><label>id: </label>{{selectedHero.id}}</div>\n\t      <div>\n\t        <label>name: </label>\n\t        <input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\"/>\n\t      </div>\n\t    </div>\n      ",
                        styles: ["\n\t    .selected {\n\t      background-color: #CFD8DC !important;\n\t      color: white;\n\t    }\n\t    .heroes {\n\t      margin: 0 0 2em 0;\n\t      list-style-type: none;\n\t      padding: 0;\n\t      width: 15em;\n\t    }\n\t    .heroes li {\n\t      cursor: pointer;\n\t      position: relative;\n\t      left: 0;\n\t      background-color: #EEE;\n\t      margin: .5em;\n\t      padding: .3em 0;\n\t      height: 1.6em;\n\t      border-radius: 4px;\n\t    }\n\t    .heroes li.selected:hover {\n\t      background-color: #BBD8DC !important;\n\t      color: white;\n\t    }\n\t    .heroes li:hover {\n\t      color: #607D8B;\n\t      background-color: #DDD;\n\t      left: .1em;\n\t    }\n\t    .heroes .text {\n\t      position: relative;\n\t      top: -3px;\n\t    }\n\t    .heroes .badge {\n\t      display: inline-block;\n\t      font-size: small;\n\t      color: white;\n\t      padding: 0.8em 0.7em 0 0.7em;\n\t      background-color: #607D8B;\n\t      line-height: 1em;\n\t      position: relative;\n\t      left: -1px;\n\t      top: -4px;\n\t      height: 1.8em;\n\t      margin-right: .8em;\n\t      border-radius: 4px 0 0 4px;\n\t    }\n\t  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent); //onSelect function variable of type hero is the hero for databinding.
        }
    }
});
//# sourceMappingURL=app.component.js.map