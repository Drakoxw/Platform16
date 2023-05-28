import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SubRoutingModule } from './sub-routing.module';
// import { ButtonComponent } from '../shared/button/button.component';
import { ButtonComponent } from '@shared/button/button.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SubRoutingModule,
    ButtonComponent
  ]
})
export class ClientModule { }
