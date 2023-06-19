import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SubRoutingModule } from './sub-routing.module'

import { HomeComponent } from './Views/home/home.component'
import { ButtonComponent } from '@shared/button/button.component'
import { CardItemComponent } from './Components/card-item/card-item.component';
import { ContactUsComponent } from './Views/contact-us/contact-us.component';
import { AboutUsComponent } from './Views/about-us/about-us.component';
import { CarruselComponent } from './Components/carrusel/carrusel.component';
import { DividerComponent } from './Components/divider/divider.component';
import { Banner1Component } from './Components/banner1/banner1.component';
import { CardComponent } from './Components/card/card.component';
import { FooterHomeComponent } from './Components/footer-home/footer-home.component'

@NgModule({
  declarations: [
    HomeComponent,
    CardItemComponent,
    ContactUsComponent,
    AboutUsComponent,
    CarruselComponent,
    DividerComponent,
    Banner1Component,
    CardComponent,
    FooterHomeComponent
  ],
  imports: [
    CommonModule,
    SubRoutingModule,
    ButtonComponent
  ]
})
export class ClientModule { }
