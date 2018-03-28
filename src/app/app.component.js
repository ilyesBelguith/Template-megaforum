"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(location, router) {
        this.location = location;
        this.router = router;
        this.isLoggedIn = true;
        console.log(location.path());
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.location.path());
        this.router.events.subscribe(function (event) {
            if (_this.location.path() == "/login") {
                _this.isLoggedIn = false;
            }
            else {
                _this.isLoggedIn = true;
            }
            // if (val.url == '/login') { this.isLoggedIn = false }
            // if (val.url == '/') { this.isLoggedIn = false }
        });
    };
    AppComponent.prototype.isMap = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map