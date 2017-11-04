import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { MyTestComponent } from '../../components/test.component';

@NgModule({
  declarations: [
    HomePage, MyTestComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  entryComponents: [ MyTestComponent ]
})
export class HomePageModule {}
