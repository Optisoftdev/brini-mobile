import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsSinglePage } from './news-single';

@NgModule({
  declarations: [
    NewsSinglePage,
  ],
  imports: [
    IonicPageModule.forChild(NewsSinglePage),
  ],
})
export class NewsSinglePageModule {}
