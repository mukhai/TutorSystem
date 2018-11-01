import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { RegisterPage } from '../register/register';
import { SidemenuPage } from '../sidemenu/sidemenu';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	loginForm: FormGroup;
	loginError: string;

	//user = {} as User;

	constructor(
		private navCtrl: NavController,
		private auth: AuthService,
		fb: FormBuilder
	) {
		this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
  }
 
  login() {
		let data = this.loginForm.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.setRoot(SidemenuPage),
				error => this.loginError = error.message
			);
  }

  /*async login(user:User){
	  try {
		  const result = await this.auth.signInWithEmail(user.email, user.password);
		  if(result){
			  this.navCtrl.setRoot('HomePage');
		  }
	  }
	  catch(e){
		  console.error(e);
	  }
  }*/

  signup(){
	  this.navCtrl.push(RegisterPage);
  }

}
