import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
//import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: '' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About' }
  } //,
  /* {
    path: 'features',
    component: FeaturesComponent,
    data: { title: 'mcma.menu.features' }
  } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule {}
