import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { Subscription, interval, timer } from 'rxjs';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: [
    './carrusel.component.css',
    '../../../../../../node_modules/keen-slider/keen-slider.min.css',
  ],
})
export class CarruselComponent implements OnInit, AfterViewInit {
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;

  minSource = interval(2000);
  minTime = timer(300);
  source = interval(4000);
  time = timer(4000);
  dirtySlider = false;
  currentSlide: number = 1;
  dotHelper: Array<Number> = [];
  slider: KeenSliderInstance | null = null;
  susb: Subscription[] = [];
  classAnimate = 'animate';
  animateMinimize = 'animate_minimize';
  animateZoom = 'animate_zoom';

  ngOnInit(): void {
    this.susb[0] = this.source.subscribe(() => {
      if (!this.dirtySlider && this.slider) {
        this.slider.next();
      }
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(
        this.sliderRef.nativeElement,
        {
          loop: true,
          initial: this.currentSlide,
          slideChanged: (s) => {
            this.currentSlide = s.track.details.rel;
          },
        },
        [
          (slider) => {
            slider.on('animationStopped', () => {
              this.animateMinimize = '';
              this.animateZoom = '';
              this.susb[3]?.unsubscribe();
            }),
              slider.on('animationStarted', () => {
                this.animateMinimize = 'animate_minimize';
                this.animateZoom = 'animate_zoom';
                this.classAnimate = 'hidden';
                this.susb[3] = this.minTime.subscribe(
                  () => (this.classAnimate = 'animate')
                );
              });
          },
        ]
      );
      this.dotHelper = [
        ...Array(this.slider.track.details.slides.length).keys(),
      ];
    });
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
    this.susb.forEach((s) => s.unsubscribe());
  }

  next() {
    if (this.slider) {
      this.slider.next();
      this.dirtySlider = true;
      this.susb[1] = this.time.subscribe(() => (this.dirtySlider = false));
    }
  }

  prev() {
    if (this.slider) {
      this.slider.prev();
      this.dirtySlider = true;
      this.susb[2] = this.time.subscribe(() => (this.dirtySlider = false));
    }
  }
}
