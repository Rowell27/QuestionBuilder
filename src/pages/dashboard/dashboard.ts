import { Component } from '@angular/core';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { Questionsform } from '../questionsform/questionsform';
import { Delete } from '../delete/delete';
import { NavController, Events, ViewController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import * as xi from '../../xmodule/interfaces/xapi';
import { Xapi } from '../../xmodule/providers/xapi';
import { PageController } from '../../xmodule/providers/page-controller';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class Dashboard {
  appTitle = "Hello World!";
  userLogged:string;
  user: xi.UserLoginData;
  
  constructor(private navCtrl: NavController, private alertCtrl: AlertController, private viewCtrl: ViewController ,private events: Events,private x: Xapi, private navPar: NavParams) {
      this.x.getLoginData( x => this.login(x) );
      this.userLogged = this.navPar.get('thisstring');

    PageController.page.login = LoginPage;
    PageController.page.register = RegisterPage;

  }

  onClickChange(){
    console.log('Change Password');
    let prompt = this.alertCtrl.create({
      title: 'Change Password',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'Current',
          placeholder: 'Your current password'
        },{
          name: 'New',
          placeholder: 'Your new password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log();
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log(data.Current, data.New);
          }
        }
      ]
    });
    prompt.present();
  }

  
  ionViewDidLoad() {
    console.log("HomePage::ionViewDidLoad()");
  }
  onClickDelete(){
    console.log('delete');
    this.navCtrl.push(Delete);
  }
  login( u: xi.UserLoginData ) {
    this.user = u;
  }
  onClickAdd(){
    this.navCtrl.push( Questionsform );
    
  } 
}
