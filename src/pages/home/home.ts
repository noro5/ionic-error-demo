import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController } from 'ionic-angular';
import { MyTestComponent } from '../../components/test.component';

@IonicPage({
  name:"home",
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {

  }

  openModal(){
    console.log("HomePage.openModal()");
    let testModal = this.modalCtrl.create(MyTestComponent, { test: "param data"});
    testModal.present();
  }

}
