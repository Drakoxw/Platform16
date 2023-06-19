import { Component } from '@angular/core';
import { Articules } from '@interfaces/models';
import { ListArticules } from '@mocks/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  articules:Articules[] = ListArticules

}
