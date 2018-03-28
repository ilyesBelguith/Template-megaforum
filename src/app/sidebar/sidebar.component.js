"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
exports.ROUTES = [
    { path: 'Home', title: 'Home', icon: 'pe-7s-home', "class": '' },
    { path: 'user', title: 'User Profile', icon: 'pe-7s-user', "class": '' },
    { path: 'forum', title: 'Discussion forum', icon: 'pe-7s-chat', "class": '' },
    { path: 'FAQ', title: 'FAQ', icon: 'pe-7s-help1', "class": '' },
    { path: 'icons', title: 'Icons', icon: 'pe-7s-science', "class": '' },
    { path: 'notifications', title: 'Notifications', icon: 'pe-7s-bell', "class": '' },
    { path: 'about', title: 'About', icon: 'pe-7s-info', "class": 'active-pro' },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = exports.ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html'
        })
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map