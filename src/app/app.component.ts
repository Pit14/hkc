import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade',
      [
        state('void', style({ opacity : 0})),
        transition(':enter', [ animate(300)]),
        transition(':leave', [ animate(500)]),
      ]
    )]
})
export class AppComponent implements OnInit {
  private initialStickedBarOffset: number;

  ngOnInit() {
    this.initialStickedBarOffset = document.getElementById('sticked').offsetTop;
    console.log(this.initialStickedBarOffset);
  }



  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    console.log(this.initialStickedBarOffset);
    console.log('page offset : ' + window.pageYOffset);
    const stickedBarOffset = document.getElementById('sticked').offsetTop;
    const element = document.getElementById('sticked');
    if (window.pageYOffset > this.initialStickedBarOffset) {
      element.classList.remove('auto');
      element.classList.remove('flex-container-column');
      element.classList.add('sticky');
    } else if (window.pageYOffset < this.initialStickedBarOffset) {
      element.classList.add('auto');
      element.classList.add('flex-container-column');
      element.classList.remove('sticky');
    }
  }
}
