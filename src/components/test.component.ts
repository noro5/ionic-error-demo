import { Component } from '@angular/core'
import { NavParams } from 'ionic-angular'

@Component({
  selector: 'my-test-component',
  template: `
    <div>TEST COMPONENT</div>
  `,
})

export class MyTestComponent {
  constructor(params: NavParams){
    console.log('MyTestComponent.constructor()', {params});
  }
}
