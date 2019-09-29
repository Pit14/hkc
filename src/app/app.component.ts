import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';


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
  private test: number;

  ngOnInit() {
    const div = document.getElementById('sticked_test');
    this.initialStickedBarOffset = this.getTopPos(div, 0); // 621; //document.getElementById('sticked_test').offsetTop;

    console.log(this.initialStickedBarOffset);
  }

  getTopPos(div, offset) {

     if (div != null) {
      offset += div.offsetTop;
      return this.getTopPos(div.parent, offset);
    } else {
      return offset;
    }
  }

  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll(e) {
  //   console.log(this.initialStickedBarOffset);
  //   console.log('page offset : ' + window.pageYOffset);
  //   // const stickedBarOffset = document.getElementById('sticked').offsetTop;
  //   const element = document.getElementById('sticked');
  //   if (window.pageYOffset > this.initialStickedBarOffset) {
  //     element.classList.remove('auto');
  //     element.classList.remove('flex-container-column');
  //     element.classList.add('sticky');
  //   } else if (window.pageYOffset < this.initialStickedBarOffset) {
  //     element.classList.add('auto');
  //     element.classList.add('flex-container-column');
  //     element.classList.remove('sticky');
  //   }
  // }
}
