import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { LocationPage } from './location';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [LocationPage],
  imports: [IonicModule, AgmCoreModule,IonicPageModule.forChild(LocationPage),],
  entryComponents:[LocationPage]
})
export class LocationModule { }
