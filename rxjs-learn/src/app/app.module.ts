import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BasicComponent } from './basic/basic.component';
import { FocusComponent } from './focus/focus.component';
import { FocusModule } from './focus/focus.module';
import { VisibilityComponent } from './visibility/visibility.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BasicComponent,
    FocusComponent,
    VisibilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FocusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
