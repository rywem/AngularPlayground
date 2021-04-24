import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { TrackingFocusComponent } from './tracking-focus/tracking-focus.component';

const routes: Routes = [
  { path: 'tracking-focus', component: TrackingFocusComponent },
  { path: 'basic', component: BasicComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
