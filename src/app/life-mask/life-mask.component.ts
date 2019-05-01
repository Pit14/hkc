import { Component, OnInit } from '@angular/core';
import {min} from 'rxjs/operators';

@Component({
  selector: 'app-life-mask',
  templateUrl: './life-mask.component.html',
  styleUrls: ['./life-mask.component.css']
})
export class LifeMaskComponent implements OnInit {

  numberOfLifeMask: number;
  maxLife: number;
  minLife: number;

  constructor() { }

  ngOnInit() {
    this.numberOfLifeMask = 5
    this.maxLife = 9;
    this.minLife = 5;
  }

  addLife(): void {
    if (this.numberOfLifeMask < this.maxLife) {
      this.numberOfLifeMask ++;
    }
  }

  substractLife(): void {
    if (this.numberOfLifeMask > this.minLife) {
      this.numberOfLifeMask --;
    }
  }
}
