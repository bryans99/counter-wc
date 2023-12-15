import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'counter-wc',
  encapsulation: ViewEncapsulation.ShadowDom,
  styleUrls: ['./app.component.css', '../styles.css'],
  templateUrl: './app.component.html',
  styles: `
  `
})
export class AppComponent {

  count:number=0;

  constructor() { }

  ngOnInit() {
  }

  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
  }

  launchHello() {
    const ce = new CustomEvent('MFE_NAVIGATE', {detail:{ url: '/app/wc-hello::wc' }});
    window.dispatchEvent(ce);
  }
}
