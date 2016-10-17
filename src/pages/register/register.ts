import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterComponent } from '../../xmodule/components/register';
import * as xi from '../../xmodule/interfaces/xapi';
import { Xapi } from '../../xmodule/providers/xapi';
@Component({
  templateUrl: 'register.html',
  providers: [ Xapi]
})

export class RegisterPage {
  @ViewChild('Register') register: RegisterComponent;
  appTitle: string = '';
  constructor(
    public navCtrl: NavController,
    private x: Xapi ) {
    this.appTitle = 'Home';
    this.x.getLoginData( i => this.userLoggedIn( i ) );
  }
  userLoggedIn(i) {
    console.log("RegisterPage::userLogged()", i);
  }
  ionViewDidLoad() {
    let register = this.register;
    let t = register.t;
    t.User_ID = '회원 아이디';
    t.Password = '비밀번호';
    t.Name = '이름';
    t.Email = "이메일";
    t.Mobile = "휴대폰 번호";
    t.Birthday = "생년월일";
    t.Gender = "성별";
    t.Register = "회원 가입";
    t.Update = "회원 정보 수정";
    t.Cancel = "취소";

    t.Input_User_ID = '회원 아이디를 입력하십시오.';
    t.Input_Password = '비밀번호를 입력하십시오.';
    t.Input_Email = '이메일을 입력하십시오.';
    t.Input_Name = '이름을 입력하십시오.';
    t.Input_Mobile = '휴대폰 번호를 입력하십시오.';
    t.Input_Birthday = '생년월일을 선택(입력)하십시오.';
    t.Input_Gender = '성별을 선택하십시오.';
  }
  onBeforeRequest( r: RegisterComponent ) {
    console.log("HomePage::onBeforeRequest()");
    console.log( r.t );
  }
  onAfterRequest( r: RegisterComponent ) {
    console.log("HomePage::onAfterRequset()");
    console.log( r.t );
  }

  onCancel( r: RegisterComponent ) {
    console.log("HomePage::onCancel()");
    console.log( r.t );
    this.navCtrl.pop();
  }
  onError( msg: string ) {
    console.log("onError() ", msg );
  }
  onSuccess( user: xi.UserLoginData ) {
    console.log("onSuccess() ", user );
    this.x.alert("SUCCESS", "회원가입을 하였습니다.");
    this.navCtrl.pop();
  }
  onUpdate( user: xi.UserLoginData ) {
    console.log("onSuccess() ", user );
    this.x.alert("SUCCESS", "회원 정보를 수정 하였습니다.");
    this.navCtrl.pop();
  }
}

