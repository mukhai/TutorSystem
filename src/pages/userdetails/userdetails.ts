import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { UserAccountUpdatePage } from '../user-account-update/user-account-update';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-userdetails',
  templateUrl: 'userdetails.html',
})
export class UserdetailsPage {

  profileData: Observable<any>

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
     public navCtrl: NavController, public navParams: NavParams) {
  }

  updateProfile(){
    this.navCtrl.push(UserAccountUpdatePage);
  }

  logoutApp(){
    this.navCtrl.setRoot(LoginPage);
  }

  async ionViewDidLoad() {
    this.afAuth.authState.take(1).subscribe(data => {
      if(data && data.email && data.uid){
        this.profileData = this.afDatabase.object(`useraccount/${data.uid}`).valueChanges();
      }
    })

    console.log('ionViewDidLoad UserdetailsPage');
  }

   

}
