import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackingFocusComponent } from './tracking-focus/tracking-focus.component';

const routes: Routes = [
  { path: 'tracking-focus', component: TrackingFocusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
