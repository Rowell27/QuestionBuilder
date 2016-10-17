import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PostListComponent } from '../../xmodule/components/post-list';

@Component({
  selector: 'page-post-list',
  templateUrl: 'post-list.html'
})
export class PostListPage {
  @ViewChild('xapiPostList') postListComponent: PostListComponent;
  slug: string;
  constructor(private navCtrl: NavController,private navParams: NavParams) {
      console.log( 'PostListPage::constructor()', navParams.data);
      this.slug = this.navParams.get( 'slug' );
    }

  ionViewDidLoad() {
    console.log("PostListPage::ionViewDidLoad()", this.postListComponent.slug);
  }

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
