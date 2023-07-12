import {
  Component,
  Input,
  Renderer2,
  ElementRef,
  ViewChild,
  PLATFORM_ID,
  HostBinding,
} from '@angular/core';
import { Articules } from '@interfaces/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})

export class CardComponent {
  @ViewChild('artic', { static: false }) artic!: ElementRef<HTMLElement>;
  @Input() articule!: Articules;
  isVisible = true;
  hasBeenVisible = false;

  ngAfterViewInit(): void {}

}
