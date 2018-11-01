import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TutorListInfoPage } from './tutor-list-info';

@NgModule({
  declarations: [
    TutorListInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(TutorListInfoPage),
  ],
})
export class TutorListInfoPageModule {}
