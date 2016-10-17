import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PostListComponent } from '../../xmodule/components/post-list';

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
  @ViewChild('xapiPostList') postListComponent: PostListComponent;
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
  

  /**
   * 부모 컴포넌트에서만 ion-infinite-scroll 을 사용 할 수 있으므로
   * 부모 컴포넌트에서 자식 컴포넌트의 endless loading 로직을 호출 한 후,
   * complete() 을 호출 한다.
   * 더 이상 데이터가 없으면, enable(false) 를 호출 한다.
   */
  doInfinite( infiniteScroll ) {
    console.log("PostListPage::doInfinite() begin");
    this.postListComponent.doInfinite( ( more ) => {
      console.log("PostListPage::doInfinite() end");
      infiniteScroll.complete();
      if ( ! more ) {
        infiniteScroll.enable( false );
      }
    });
  }
  
}