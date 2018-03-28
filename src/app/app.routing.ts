import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { AddforumComponent } from './addforum/addforum.component';

const routes: Routes =[
    { path: 'search',        component: SearchComponent },
    { path: 'Home',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'forum',          component: TablesComponent },
    { path: 'FAQ',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'about',        component: UpgradeComponent },
    { path: 'login',        component: LoginComponent },
    { path: ':id',     component: AddforumComponent },
    { path: '',          redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
