import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { MyTestComponent } from './test.component';

@NgModule({
  declarations: [ MyTestComponent],
  imports: [
    CommonModule,
    IonicPageModule.forChild(MyTestComponent),
  ],
  exports: [MyTestComponent]
})
export class MyTestComponentModule {}
