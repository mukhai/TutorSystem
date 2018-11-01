import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TutorListPage } from './tutor-list';

@NgModule({
  declarations: [
    TutorListPage,
  ],
  imports: [
    IonicPageModule.forChild(TutorListPage),
  ],
  entryComponents:[TutorListPage
  ]
})
export class TutorListPageModule {}
