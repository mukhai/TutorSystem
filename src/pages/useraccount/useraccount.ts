import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/useraccount/profile.interface'
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';
import { AuthService } from '../../services/auth.service';
import { auth } from 'firebase';


@IonicPage()
@Component({
  selector: 'page-useraccount',
  templateUrl: 'useraccount.html',
})
export class UseraccountPage {

  profile = {} as Profile;

  constructor(private auth: AuthService, private afAuth: AngularFireAuth, 
    private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }

  /*updateProfile(){
    this.afAuth.authState.subscribe(auth => {
      this.afDatabase.list(`useraccount/${auth.uid}`).push(this.profile)
      .then(()=>this.navCtrl.push(UseraccountPage));
    })
     
  }*/

  updateProfile(){
    this.afAuth.authState.subscribe(auth => {
      this.afDatabase.object(`useraccount/${auth.uid}`).set(this.profile)
      .then(()=>this.navCtrl.push(UseraccountPage));
    })
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UseraccountPage');
  }

}
