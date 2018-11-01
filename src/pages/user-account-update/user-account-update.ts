import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from "../../models/useraccount/profile.interface"
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserdetailsPage } from '../userdetails/userdetails';
import { Observable } from 'rxjs';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-user-account-update',
  templateUrl: 'user-account-update.html',
})
export class UserAccountUpdatePage {

  public base64Image: string;
  profile = {} as Profile;

  profileData: Observable<any>

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
         
  }

  saveProfile() {
    this.afAuth.authState.subscribe(auth => {
      this.afDatabase.object(`useraccount/${auth.uid}`).set(this.profile)
        .then(() => this.navCtrl.push(UserdetailsPage));
    })
  }

  cancelProfile() {
    this.navCtrl.pop();
  }

  takePicture(){
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }

  getPicture() {
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.log(err);
    });

  }

  cropPicture(){
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
      allowEdit: true,
      targetHeight: 100,
      targetWidth: 100
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
     console.log(err);
    });

  }


  async ionViewDidLoad() {
    this.afAuth.authState.take(1).subscribe(data => {
      if (data && data.email && data.uid) {
        this.profileData = this.afDatabase.object(`useraccount/${data.uid}`).valueChanges();
      }
    })
    console.log('ionViewDidLoad UserdetailsPage');
  }

}
