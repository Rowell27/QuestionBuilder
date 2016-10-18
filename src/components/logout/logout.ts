import { Component } from '@angular/core';
import { LoginPage } from '../../pages/login/login';
import { Questionsform } from '../questionsform/questionsform';
import { NavController, Events, ViewController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import * as xi from '../../xmodule/interfaces/xapi';
import { Xapi } from '../../xmodule/providers/xapi';
import { PageController } from '../../xmodule/providers/page-controller';

/*
  Generated class for the Logout component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'logout',
  templateUrl: 'logout.html'
})
export class Logout {

  userLogged:string;
  user: xi.UserLoginData;
  
  constructor(private navCtrl: NavController, private viewCtrl: ViewController ,private events: Events,private x: Xapi, private navPar: NavParams) {
      this.userLogged = this.navPar.get('thisstring');
    

    this.events.subscribe( 'logout', () => {
      console.log('HomePage::constructor::event logout');
      this.logout();
    });
    this.events.subscribe( 'resign', () => {
      console.log('HomePage::constructor::event resign');
      this.logout();
    });
    PageController.page.login = LoginPage;
    

  }
  logout() {
    
    this.user = '';
    this.navCtrl.setRoot(LoginPage);
  }
  onClickLogout() {
        // this.x.logout();
        this.x.alert("Log out", "Logging out");
        this.logout();
  }
}
