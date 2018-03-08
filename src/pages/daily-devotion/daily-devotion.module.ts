import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyDevotionPage } from './daily-devotion';

@NgModule({
  declarations: [
    DailyDevotionPage,
  ],
  imports: [
    IonicPageModule.forChild(DailyDevotionPage),
  ],
})
export class DailyDevotionPageModule {}
