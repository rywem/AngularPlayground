import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { SlideUpComponent } from './components/slide-up/slide-up.component';
import { CardComponent } from './components/slide-up/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicAnimationsComponent } from './components/basic-animations/basic-animations.component';
import { TransformComponent } from './components/transform/transform.component';
import { CssTransitionComponent } from './components/css-transition/css-transition.component';
import { OpenCloseComponent } from './components/open-close/open-close.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SlideUpComponent,
    CardComponent,    
    BasicAnimationsComponent,
    TransformComponent,
    CssTransitionComponent,
    OpenCloseComponent
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
