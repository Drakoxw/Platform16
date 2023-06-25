import { Component, Input, Renderer2, ElementRef, ViewChild, PLATFORM_ID } from '@angular/core';
import { Articules } from '@interfaces/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @ViewChild("artic") artic!: ElementRef<HTMLElement>
  @Input() articule!: Articules;
  isVisible = false;
  hasBeenVisible = false;

  constructor(private elementRef: ElementRef) {}

  private canLazyLoad(){
    return window && 'IntersectionObserver' in window;
  }

  ngOnInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!this.hasBeenVisible) {
            this.isVisible = true;
            this.hasBeenVisible = true;
          }
        }
      });
    }, options);

    observer.observe(this.elementRef.nativeElement);
  }

}
