import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  declarations: [AppComponent],
})
export class AppModule {
  ngDoBootstrap() {}
}
