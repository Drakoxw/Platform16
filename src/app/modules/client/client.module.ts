import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubRoutingModule } from './sub-routing.module';
// import { ButtonComponent } from '../shared/button/button.component';

import { HomeComponent } from './Views/home/home.component';
import { ButtonComponent } from '@shared/button/button.component';
import { ItemsViewsComponent } from './Views/items-views/items-views.component';
import { LIstItemsComponent } from './Components/list-items/list-items.component';
import { CardItemComponent } from './Components/card-item/card-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    ItemsViewsComponent,
    LIstItemsComponent,
    CardItemComponent
  ],
  imports: [
    CommonModule,
    SubRoutingModule,
    ButtonComponent
  ]
})
export class ClientModule { }
