import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { Dashboard } from '../pages/dashboard/dashboard';
import { PostListPage } from '../pages/post-list/post-list';
import { PostEditPage } from '../pages/post-edit/post-edit';
import { XModule } from '../xmodule/modules/core';
import { Questionsform } from '../pages/questionsform/questionsform';
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    Dashboard,
    Questionsform,
    PostListPage,
    PostEditPage
  ],
  imports: [
    XModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    Dashboard,
    Questionsform,
    PostListPage,
    PostEditPage
    
  ],
  providers: [ ]
})
export class AppModule {}