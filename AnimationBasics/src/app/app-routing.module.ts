import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideUpComponent } from './components/slide-up/slide-up.component';

const routes: Routes = [
  { path: 'slide-up', component: SlideUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
