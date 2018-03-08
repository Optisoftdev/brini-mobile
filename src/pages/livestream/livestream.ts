import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoPlayer } from '@ionic-native/video-player';


/**
 * Generated class for the LivestreamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-livestream',
  templateUrl: 'livestream.html',
})
export class LivestreamPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private videoPlayer: VideoPlayer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivestreamPage');
  }

  play(){

    this.videoPlayer.play('assets/img/wind.mp4').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });

  }



}
