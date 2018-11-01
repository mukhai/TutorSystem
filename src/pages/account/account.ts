import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';
import { UserdetailsPage } from '../userdetails/userdetails';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  @ViewChild('myTabs') tabRef:Tabs;

  tab1 = "UserdetailsPage";
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    let openTab = this.navParams.get('openTab');
    if(openTab) {
      this.tabRef.select(openTab);
    }
  }

}
