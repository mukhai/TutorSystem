import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Profile } from '../../models/useraccount/profile.interface';
import { TutorListService } from '../../services/tutorlist.service';
import firebase from 'firebase';
import { TutorListInfoPage } from '../tutor-list-info/tutor-list-info';


@IonicPage()
@Component({
  selector: 'page-tutor-list',
  templateUrl: 'tutor-list.html',
})
export class TutorListPage {
  //information: any[];
  profileData: Observable<Profile[]>;
  public profiles: Array<any> = [];
  public profileRef: firebase.database.Reference = firebase.database().ref('/useraccount');

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams,
    private tutorListService: TutorListService) {

      this.profileRef.on('value', itemSnapshot => {
        this.profiles = [];
        itemSnapshot.forEach( itemSnap => {
          this.profiles.push(itemSnap.val());
          return false;
        });
      });


      }

      goToUserInfo(){
        this.navCtrl.push(TutorListInfoPage);
      }
    }
