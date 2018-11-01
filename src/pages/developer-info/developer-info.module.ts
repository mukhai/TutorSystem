import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeveloperInfoPage } from './developer-info';

@NgModule({
  declarations: [
    DeveloperInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(DeveloperInfoPage),
  ],
})
export class DeveloperInfoPageModule {}
