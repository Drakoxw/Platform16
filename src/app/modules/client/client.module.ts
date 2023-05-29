import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SubRoutingModule } from './sub-routing.module'

import { HomeComponent } from './Views/home/home.component'
import { ButtonComponent } from '@shared/button/button.component'
import { ItemsViewsComponent } from './Views/items-views/items-views.component'
import { CardItemComponent } from './Components/card-item/card-item.component'

@NgModule({
  declarations: [
    HomeComponent,
    ItemsViewsComponent,
    CardItemComponent
  ],
  imports: [
    CommonModule,
    SubRoutingModule,
    ButtonComponent
  ]
})
export class ClientModule { }
