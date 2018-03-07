import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RamdomizePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ramdomize',
  templateUrl: 'ramdomize.html',
})
export class RamdomizePage {
  public labels;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.labels = [];
  }

  generatorTxt: { txt: string } = {
    txt:''
  };
  getRandomColor() {
    return `#${Math.random().toString(16).substr(-6)}`;
  }

  getRandomAlign() {
    return ['left', 'center', 'right'][Math.floor(Math.random() * 3)];
  }

  getRandomFontFamily() {
    return [
      'Arial',
      'Helvetica',
      'Times New Roman',
      'Times',
      'Courier New',
      'Courier',
      'Verdana',
      'Georgia',
      'Bookman',
      'Comic Sans MS'
    ][Math.floor(Math.random() * 10)];
  }

  getRandomFontSize() {
    return `${Math.floor(Math.random() * 3) + 1}em`;
  }

  getRandomFontStyle() {
    return ['normal', 'italic', 'oblique'][Math.floor(Math.random() * 3)];
  }

  onChangeText(value) {
    if (value) {
      this.labels = value.split(' ').filter(x => x).slice(0, 5).map(text => ({
        text
      }));
    } else {
      this.labels = [];
    }
  }

  randomizeFormat() {
    this.labels = this.labels.map(l => ({
      text: l.text,
      color: this.getRandomColor(),
      align: this.getRandomAlign(),
      fontFamily: this.getRandomFontFamily(),
      fontSize: this.getRandomFontSize(),
      fontStyle: this.getRandomFontStyle()
    }));
  }
}
