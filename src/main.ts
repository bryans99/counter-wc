import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import 'zone.js';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(({injector}) => {
    const element = createCustomElement(AppComponent, {injector})
    customElements.define('counter-wc', element)
  })
  .catch((err) => {
    console.error("Error bootstrapping module counter-wc")
    console.error(err)
  });
