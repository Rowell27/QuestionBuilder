import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})
export class CreateUpdateForm {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Form Page');
  }

}