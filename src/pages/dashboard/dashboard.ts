import { Component } from '@angular/core';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { PostListPage } from '../post-list/post-list';
import { PostEditPage } from '../post-edit/post-edit';
import { Questionsform } from '../questionsform/questionsform';
import { NavController, Events, ViewController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import * as xi from '../../xmodule/interfaces/xapi';
import { Xapi } from '../../xmodule/providers/xapi';
import { PageController } from '../../xmodule/providers/page-controller';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class Dashboard {
  appTitle = "Hello World!";
  userLogged:string;
  user: xi.UserLoginData;
  
  constructor(private navCtrl: NavController, private viewCtrl: ViewController ,private events: Events,private x: Xapi, private navPar: NavParams) {
      this.x.getLoginData( x => this.login(x) );
      this.userLogged = this.navPar.get('thisstring');
    

    this.events.subscribe( 'logout', () => {
      console.log('HomePage::constructor::event logout');
      this.logout();
    });
    this.events.subscribe( 'resign', () => {
      console.log('HomePage::constructor::event resign');
      this.logout();
    });
    this.events.subscribe( 'login', (x) => {
      console.log('HomePage::constructor::event logout');
      this.login(x);
    });
    this.events.subscribe( 'register', x => {
      console.log('HomePage::constructor::event register');
      this.login(x);
    });

    PageController.page.login = LoginPage;
    PageController.page.register = RegisterPage;

  }
  
  ionViewDidLoad() {
    console.log("HomePage::ionViewDidLoad()");
   
  }
  login( u: xi.UserLoginData ) {
    this.user = u;
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
  onClickUpdate() {
    console.log(this.user.user_login);
    //this.navCtrl.push( RegisterPage );
  }
  onClickChangePassword() {
    //this.navCtrl.push( PasswordPage );
  }
  onClickAdd(){
    console.log('Add');
    this.navCtrl.push(PostListPage);
  } 
}
