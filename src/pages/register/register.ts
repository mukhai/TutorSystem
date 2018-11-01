import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { LoginPage } from '../login/login';
import { Profile } from '../../models/useraccount/profile.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
	selector: 'as-page-register',
	templateUrl: './register.html'
})

export class RegisterPage {

	profile = {} as Profile;
	
	signupError: string;
	form: FormGroup;

	constructor(
		fb: FormBuilder,public navCtrl: NavController,public navParams: NavParams,private auth: AuthService,
		private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase
	) {
		this.form = fb.group({
			firstname: ['', Validators.compose([Validators.required,Validators.required])],
			lastname: ['', Validators.compose([Validators.required,Validators.required])],
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
	}

	signup() {
		let data = this.form.value;
		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signUp(credentials).then(
			() => this.navCtrl.setRoot(LoginPage),
				error => this.signupError = error.message
		)
	}

	ionViewWillLeave(){
		this.afAuth.authState.subscribe(auth => {
			this.afDatabase.object(`useraccount/${auth.uid}`).set(this.form.value);
		  })
	}
}
