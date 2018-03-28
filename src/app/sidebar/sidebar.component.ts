import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'Home', title: 'Discussion forum',  icon:'pe-7s-chat', class: '' },
    { path: 'search', title: 'Advanced search',  icon:'pe-7s-search', class: '' },
    { path: 'user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
   // { path: 'forum', title: 'Discussion forum',  icon:'pe-7s-chat', class: '' },
    { path: 'FAQ', title: 'FAQ',  icon:'pe-7s-help1', class: '' },

    //{ path: 'icons', title: 'Icons',  icon:'pe-7s-science', class: '' },

    //{ path: 'notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
    { path: 'about', title: 'About',  icon:'pe-7s-info', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  }
}
