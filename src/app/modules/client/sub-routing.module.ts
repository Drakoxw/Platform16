import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Views/home/home.component';
import { ItemsViewsComponent } from './Views/items-views/items-views.component';

import { PATHS_MODULE_CLIENT } from '@constants/routes';

const routes: Routes = [
  {
    path: PATHS_MODULE_CLIENT.root,
    component: HomeComponent,
  },
  {
    path: PATHS_MODULE_CLIENT.aboutUs,
    component: ItemsViewsComponent,
  },
  {
    path: PATHS_MODULE_CLIENT.contactUs,
    component: ItemsViewsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubRoutingModule {}
