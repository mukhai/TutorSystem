import { Component, ViewChild } from '@angular/core';
import { IonicPage,NavController, Nav, ToastController } from 'ionic-angular';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../../models/useraccount/profile.interface';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage({
name:'start-page',
segment:'side'
})
@Component({
  selector: 'page-sidemenu',
  templateUrl: 'sidemenu.html',
})
export class SidemenuPage {
  profileData: AngularFireObject<Profile>
  
  @ViewChild(Nav) nav:Nav;
  pages: Array<{title:string, component:any, openTab?:any}>;
  rootPage='Home1Page';

  constructor(public navCtrl: NavController
    , private afAuth: AngularFireAuth
    , private afDatabase: AngularFireDatabase,
    private toast: ToastController) {
    this.pages = [
      { title: 'Home', component:'Home1Page' },
      { title: 'DashBoard', component:'DashboardPage' },
      { title: 'Account', component:'AccountPage' },
      { title: 'Contact', component:'ContactPage' },
      { title: 'About', component:'AboutPage' },
      //{ title: 'Useraccount', component:'UseraccountPage', openTab:1 },
    ];
  }

  openPage(page){
    this.nav.setRoot(page.component, {openTab: page.openTab});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SidemenuPage');
    this.afAuth.authState.take(1).subscribe(data => {
      if(data && data.email && data.uid){
        this.toast.create({
          message: `Welcome to EziTutor, ${data.email}`,
          duration: 3000
        }).present();

        this.profileData = this.afDatabase.object(`useraccount/${data.uid}`)
      }
      else {
        this.toast.create({
          message: `Could not find authentication details.`,
          duration: 3000
        }).present();
      }
    })
  }
 
}
