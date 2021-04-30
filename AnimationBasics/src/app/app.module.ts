import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { SlideUpComponent } from './components/slide-up/slide-up.component';
import { CardComponent } from './components/slide-up/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SlideUpComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }