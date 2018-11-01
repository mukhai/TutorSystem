import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-home1',
  templateUrl: 'home1.html',
})
export class Home1Page {
  @ViewChild('myTabs') tabRef:Tabs;

  tab1 = 'LocationPage'; //tutup sementara utk buat interface lain
  tab2 = 'TutorListPage';
  tab3 = 'EventPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    let openTab = this.navParams.get('openTab');
    if(openTab) {
      this.tabRef.select(openTab);
    }
  }

}
