import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleTransitionComponent } from './components/simple-transition/simple-transition.component';
import { SlideUpComponent } from './components/slide-up/slide-up.component';

const routes: Routes = [
  { path: 'slide-up', component: SlideUpComponent},
  { path: 'simple-transition', component: SimpleTransitionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
