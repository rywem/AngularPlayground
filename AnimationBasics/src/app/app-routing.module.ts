import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicAnimationsComponent } from './components/basic-animations/basic-animations.component';
import { CssTransitionComponent } from './components/css-transition/css-transition.component';
import { OpenCloseComponent } from './components/open-close/open-close.component';
import { SlideUpComponent } from './components/slide-up/slide-up.component';
import { TransformComponent } from './components/transform/transform.component';

const routes: Routes = [
  { path: 'slide-up', component: SlideUpComponent},
  { path: 'open-close', component: OpenCloseComponent },
  { path: 'basic-animations', component: BasicAnimationsComponent },
  { path: 'transform', component: TransformComponent },
  { path: 'css-transition', component: CssTransitionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
