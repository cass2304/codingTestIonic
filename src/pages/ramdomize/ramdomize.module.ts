import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RamdomizePage } from './ramdomize';

@NgModule({
  declarations: [
    RamdomizePage,
  ],
  imports: [
    IonicPageModule.forChild(RamdomizePage),
  ],
})
export class RamdomizePageModule {}
