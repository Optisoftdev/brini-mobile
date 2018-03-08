import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { ProfilePage } from "../profile/profile";
import { NewsPage } from "../news/news";
import { AudioPage } from "../audio/audio";
import { VideoPage } from "../video/video";
import { ContactPage } from "../contact/contact";
import { DonatePage } from "../donate/donate";
import { SettingsPage } from "../settings/settings";
import { AboutPage } from "../about/about";
import { ChatPage } from "../chat/chat";
import { LivestreamPage } from "../livestream/livestream";
import { DailyDevotionPage } from "../daily-devotion/daily-devotion";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  stream() {
    this.navCtrl.push('LivestreamPage');
  }

  // profile() {
  //   this.navCtrl.push('ProfilePage');
  // }


  contact() {
    this.navCtrl.push('ContactPage');
  }

  donate() {
    this.navCtrl.push('DonatePage');
  }

  audio() {
    this.navCtrl.push('AudioPage');
  }

  news() {
    this.navCtrl.push('NewsPage');
  }

  video() {
    this.navCtrl.push('VideoPage');
  }

  settings() {
    this.navCtrl.push('SettingsPage');
  }

  chat() {
    this.navCtrl.push('ChatPage');
  }

  about() {
    this.navCtrl.push('AboutPage');
  }

  devotion() {
    this.navCtrl.push('DailyDevotionPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
