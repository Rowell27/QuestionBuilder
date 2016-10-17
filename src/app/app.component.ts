import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';


import { LoginPage } from '../pages/login/login';
import { Dashboard } from '../pages/dashboard/dashboard';


@Component({
  template: `<ion-nav #myNav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  @ViewChild('myNav') nav: NavController
  rootPage = Dashboard;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
  ngAfterViewInit() {
      // Let's navigate from TabsPage to Page1
      this.nav.setRoot(LoginPage);
   }
}
