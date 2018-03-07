import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RamdomizePage } from '../ramdomize/ramdomize';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {   
    this.presentLoading();
  }

  presentLoading() {
    setTimeout(() => {
      this.navCtrl.setRoot(RamdomizePage, { });
    }, 2000);    
  }
  
}
