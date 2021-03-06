"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_routing_1 = require("./app.routing");
var navbar_module_1 = require("./shared/navbar/navbar.module");
var footer_module_1 = require("./shared/footer/footer.module");
var sidebar_module_1 = require("./sidebar/sidebar.module");
var lbd_module_1 = require("./lbd/lbd.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var user_component_1 = require("./user/user.component");
var tables_component_1 = require("./tables/tables.component");
var typography_component_1 = require("./typography/typography.component");
var icons_component_1 = require("./icons/icons.component");
var notifications_component_1 = require("./notifications/notifications.component");
var upgrade_component_1 = require("./upgrade/upgrade.component");
var login_component_1 = require("./login/login.component");
var addforum_component_1 = require("./addforum/addforum.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                user_component_1.UserComponent,
                tables_component_1.TablesComponent,
                typography_component_1.TypographyComponent,
                icons_component_1.IconsComponent,
                notifications_component_1.NotificationsComponent,
                upgrade_component_1.UpgradeComponent,
                login_component_1.LoginComponent,
                addforum_component_1.AddforumComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                navbar_module_1.NavbarModule,
                footer_module_1.FooterModule,
                sidebar_module_1.SidebarModule,
                router_1.RouterModule,
                app_routing_1.AppRoutingModule,
                lbd_module_1.LbdModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map