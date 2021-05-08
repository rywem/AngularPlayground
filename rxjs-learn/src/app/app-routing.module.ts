import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { FocusComponent } from './focus/focus.component';
import { VisibilityComponent } from './visibility/visibility.component';


const routes: Routes = [
  { path: 'focus', component: FocusComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'visibility', component: VisibilityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
