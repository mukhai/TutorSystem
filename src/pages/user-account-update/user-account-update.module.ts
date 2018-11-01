import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserAccountUpdatePage } from './user-account-update';

@NgModule({
  declarations: [
    UserAccountUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(UserAccountUpdatePage),
  ],
  entryComponents:[
    UserAccountUpdatePage
  ]
})
export class UserAccountUpdatePageModule {}
