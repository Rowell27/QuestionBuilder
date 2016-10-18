import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { List } from '../../components/list/list';
import { CreateUpdateForm } from '../form/form';

/*
  Generated class for the Questionsform page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-questionsform',
  templateUrl: 'questionsform.html'
})
export class Questionsform {
  @ViewChild('xapiPostList') postListComponent: List;
  slug: string;
  constructor(
    public navCtrl: NavController,
    private navParams: NavParams
    ) {
      console.log( 'PostListPage::constructor()', navParams.data);
      this.slug = this.navParams.get( 'slug' );
    }


  ionViewDidLoad() {
    console.log("PostListPage::ionViewDidLoad()", this.postListComponent.slug);
  }
  addIco(){
    this.navCtrl.push(CreateUpdateForm);   
  }
}