import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html'
})
export class DividerComponent {
  getScreenWidth: number = 0;
  blocks: number[] = [];

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.blocks = Array(Math.floor(this.getScreenWidth / 20) - 1 ).fill(0);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.blocks = Array(Math.floor(this.getScreenWidth / 20) - 1).fill(0);
  }
}