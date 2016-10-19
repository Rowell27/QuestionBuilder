import { Component, Input } from '@angular/core';
import { CreateUpdateForm } from '../../pages/form/form';
import { Xapi } from '../../xmodule/providers/xapi';
import * as xi from '../../xmodule/interfaces/xapi';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'question-list',
    templateUrl: 'list.html'
})
export class List {
    @Input() slug: string;
    posts: xi.Posts = [];
    page: number = 0;
    constructor(private x: Xapi,private navCtrl: NavController) {
        console.log('PostListComponent::constructor()', this.slug);
    }
    ngOnInit() {
        console.log('PostListComponent::ngOnInit()', this.slug);
        this.loadMorePosts( re => console.log(re), ()=>{} );
    }
    
    loadMorePosts( successCallback, errorCallback ) {
        this.page ++;
        console.log('loadMorePosts()');
        let arg : xi.PostQuery = xi.postQuery;
        arg.category_name = this.slug;
        arg.paged = this.page;
        arg.per_page = 50;
        this.x.get_posts( arg, (res: xi.PostQueryResponse) => {
            // console.log( 'loadMorePosts()', res);
            if ( res.success ) {
                if ( res.data && res.data.length ) {
                    this.displayPosts( res.data );
                    successCallback( true );
                }
                else {
                    console.log('No more posts');
                    successCallback( false );
                }
            }
            else {
                if ( res.data ) alert( res.data );
                else alert("Error on post list");
                errorCallback();
            }
        },
        e => {

        } );
    }
    displayPosts( posts: xi.Posts ) {
        console.log('displayPosts()', posts);
        for( let post of posts ) {
            this.posts.push( (<xi.Post> post) );
        }
    }

    doInfinite( callback ) {
        console.log('PostListComponent::doInfinite() begin');
        this.loadMorePosts( (re) => {
            console.log('doInfinite() end');
            callback(re);
        },
        () => {} );
    }
    clickList(ID){
        console.log(ID);
    }
    thread(){
        console.log('ok');
        this.navCtrl.push(CreateUpdateForm,{
            title:'Edit Question'
        });
    }
}