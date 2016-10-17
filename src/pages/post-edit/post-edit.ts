import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-post-edit',
  templateUrl: 'post-edit.html'
})
export class PostEditPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PostEdit Page');
  }

}
