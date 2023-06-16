import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SubRoutingModule } from './sub-routing.module'

import { HomeComponent } from './Views/home/home.component'
import { ButtonComponent } from '@shared/button/button.component'
import { CardItemComponent } from './Components/card-item/card-item.component';
import { ContactUsComponent } from './Views/contact-us/contact-us.component';
import { AboutUsComponent } from './Views/about-us/about-us.component'

@NgModule({
  declarations: [
    HomeComponent,
    CardItemComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    SubRoutingModule,
    ButtonComponent
  ]
})
export class ClientModule { }
