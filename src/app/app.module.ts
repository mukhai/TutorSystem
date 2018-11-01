import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from '../config';
import { AuthService } from '../services/auth.service';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { SidemenuPage } from '../pages/sidemenu/sidemenu';
import { LocationModule } from '../pages/location/location.module';
import { AgmCoreModule } from '@agm/core';
import { UseraccountPage } from '../pages/useraccount/useraccount';
import { UserAccountUpdatePage } from '../pages/user-account-update/user-account-update';
import { TutorListPage } from '../pages/tutor-list/tutor-list';//letak bila nak display as single page

import { TutorListService } from '../services/tutorlist.service';
import { TutorListInfoPage } from '../pages/tutor-list-info/tutor-list-info';
import { RegisterPage } from '../pages/register/register';

import { Camera } from '@ionic-native/camera';
import { TestPage } from '../pages/test/test';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';




@NgModule({
  declarations: [
    MyApp,
    UseraccountPage,
    SidemenuPage,
    UserAccountUpdatePage,
    TutorListInfoPage,
    RegisterPage,
    LoginPage,
    TestPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot(),
    LocationModule,
    NgxErrorsModule,
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AgmCoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UseraccountPage,
    SidemenuPage,
    UserAccountUpdatePage,
    TutorListInfoPage,
    RegisterPage,
    LoginPage,
    TestPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    CameraPreview,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AuthService,
    TutorListService
   
  ]
})
export class AppModule {}
