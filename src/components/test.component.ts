import { Component } from '@angular/core'
import { NavParams, IonicPage, ViewController } from 'ionic-angular'

@IonicPage()
@Component({
  selector: 'my-test-component',
  template: `
    <div>TEST COMPONENT</div>
    <input type="text" name="smth">
    <button type="button" (click)="close()">Close</button>
  `,
})

export class MyTestComponent {
  constructor(public params: NavParams, public viewCtrl: ViewController){
    console.log('MyTestComponent.constructor()', {params});
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
