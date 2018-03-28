"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var user_component_1 = require("./user/user.component");
var tables_component_1 = require("./tables/tables.component");
var typography_component_1 = require("./typography/typography.component");
var icons_component_1 = require("./icons/icons.component");
var notifications_component_1 = require("./notifications/notifications.component");
var upgrade_component_1 = require("./upgrade/upgrade.component");
var login_component_1 = require("./login/login.component");
var addforum_component_1 = require("./addforum/addforum.component");
var routes = [
    { path: 'Home', component: home_component_1.HomeComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'forum', component: tables_component_1.TablesComponent },
    { path: 'FAQ', component: typography_component_1.TypographyComponent },
    { path: 'icons', component: icons_component_1.IconsComponent },
    { path: 'notifications', component: notifications_component_1.NotificationsComponent },
    { path: 'about', component: upgrade_component_1.UpgradeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'addforum', component: addforum_component_1.AddforumComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes)
            ],
            exports: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.js.map