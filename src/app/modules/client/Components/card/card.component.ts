import { Component, Input } from '@angular/core';
import { Articules } from '@interfaces/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() articule!: Articules

}
