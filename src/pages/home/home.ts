import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Tabs, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('myTabs') tabRef:Tabs;

  //tab1 = 'HomePage';
  //tab2 = 'LocationPage';
  tab3 = 'UserDetailsPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    let openTab = this.navParams.get('openTab');
    if(openTab) {
      this.tabRef.select(openTab);
    }
  }
}
