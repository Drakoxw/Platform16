import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('@moduleClient/client.module').then(m => m.ClientModule)
  },
  {
    path: 'user', 
    loadChildren: () => import('@moduleUser/user.module').then(m => m.UserModule)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
