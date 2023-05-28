import { Component, Input } from '@angular/core';
import { ItemsModel } from '@interfaces/models';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html'
})
export class CardItemComponent {
  @Input() item!: ItemsModel;
}
