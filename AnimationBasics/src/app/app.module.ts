import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { SlideUpComponent } from './components/slide-up/slide-up.component';
import { CardComponent } from './components/slide-up/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleTransitionComponent } from './components/simple-transition/simple-transition.component';
import { BasicAnimationsComponent } from './components/basic-animations/basic-animations.component';
import { TransformComponent } from './components/transform/transform.component';
import { CssTransitionComponent } from './components/css-transition/css-transition.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SlideUpComponent,
    CardComponent,
    SimpleTransitionComponent,
    BasicAnimationsComponent,
    TransformComponent,
    CssTransitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
