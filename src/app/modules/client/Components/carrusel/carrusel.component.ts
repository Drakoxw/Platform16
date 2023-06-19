import { Component, ElementRef, ViewChild, OnInit } from "@angular/core"
import KeenSlider, { KeenSliderInstance } from "keen-slider"
import { Subscription, interval, timer } from 'rxjs';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: [
    "../../../../../../node_modules/keen-slider/keen-slider.min.css"
  ],
})
export class CarruselComponent implements OnInit {
  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>

  source = interval(4000)
  time = timer(4000)
  dirtySlider = false
  currentSlide: number = 1
  dotHelper: Array<Number> = []
  slider: KeenSliderInstance|null = null
  susb: Subscription[] = []

  ngOnInit(): void {
    this.susb[0] = this.source.subscribe(() => {
      if (!this.dirtySlider) {
        this.slider?.next()
      }
    })
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        loop: true,
        initial: this.currentSlide,
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel
        },
      })
      this.dotHelper = [
        ...Array(this.slider.track.details.slides.length).keys(),
      ]
    })

  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
    this.susb.forEach(s => s.unsubscribe())
  }

  next() {
    this.slider?.next()
    this.dirtySlider = true
    this.susb[1] = this.time.subscribe(() => this.dirtySlider = false)
  }

  prev() {
    this.slider?.prev()
    this.dirtySlider = true
    this.susb[2] = this.time.subscribe(() => this.dirtySlider = false)
  }

}
