import {Component, DoCheck, Input, OnInit, ViewChild, ElementRef, HostListener, AfterContentInit} from '@angular/core';
import {Charm} from '../charm';
import {CHARMS} from '../mock-data';

@Component({
  selector: 'app-charms-equiped',
  templateUrl: './charms-equipped.component.html',
  styleUrls: ['./charms-equipped.component.css']
})
export class CharmsEquippedComponent implements OnInit, DoCheck, AfterContentInit {

  @ViewChild('stickyMenu') menuElement: ElementRef;
  @ViewChild('belowStickyMenu') belowMenuElement: ElementRef;
  @ViewChild('sticked') stickyDiv: ElementRef;
  // @ViewChild('stickyMenu', {read: ElementRef}) menuElement: ElementRef;

  sticky = false;
  belowSticky = false;
  elementPosition: any;
  stickedDivHeight: number;
  belowStickedDivHeight: number;

  @Input() selectedCharms: Charm[];
  numberOfNotchesEquipped = 0; // = this.countNotches();
  @Input() numberOfNotches: number;

  constructor() { }

  ngAfterContentInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop; // Probleme ici ? On récupères pas les bonnes coords, parents offset or something ?
    this.stickedDivHeight = this.menuElement.nativeElement.offsetHeight;
    console.log(this.stickedDivHeight);
    this.belowStickedDivHeight = this.stickedDivHeight;

  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    console.log( 'Page Offset : ' + windowScroll);
    console.log( 'Initial offset : ' +  this.elementPosition);
    if (windowScroll >= this.elementPosition) {
      this.sticky = true;
      this.belowSticky = true;
    } else {
      this.sticky = false;
      this.belowSticky = false;
    }
  }

  ngOnInit() {
     this.selectedCharms = CHARMS;
     this.numberOfNotchesEquipped = 0;
     this.numberOfNotches = 3;
     this.stickedDivHeight = this.menuElement.nativeElement.offsetHeight;
     console.log('cc : ' + this.stickedDivHeight);
  }

  countNotches() {
    let x = 0;
    for (const charm of this.selectedCharms) {
      x += charm.notches;
    }
    this.numberOfNotchesEquipped = x;
  }

  ngDoCheck() {
    this.countNotches();
  }

  /**
   * return an array which length is the number of white notches to display
   */
  getNumberOfEquippedNotchesCheat(): number[] {
    if (this.numberOfNotchesEquipped > this.numberOfNotches) { // If Overcharmed
      return Array(this.numberOfNotches);
    } else {
      return Array(this.numberOfNotchesEquipped);
    }
  }

  /**
   * return an array which length is the number of black notches to display
   */
  getNumberOfUnequippedNotchesCheat(): number[] {
    if (this.numberOfNotches - this.numberOfNotchesEquipped >= 0) {
      return Array( this.numberOfNotches - this.numberOfNotchesEquipped);
    } else {
      return Array(0);
    }
  }

  /**
   * return an array which length is the number of Overcharmed notches to display
   */
  getNumberOfOvercharmedNotchesCheat(): number[] {
    if (this.numberOfNotchesEquipped - this.numberOfNotches >= 0) {
      return Array( this.numberOfNotchesEquipped - this.numberOfNotches);
    } else {
      return Array(0);
    }
  }

  /**
   * return an array to display the medium notch if necessary
   */
  isFullCheat(): number[] {
    if (this.numberOfNotchesEquipped >= this.numberOfNotches) {
      return Array( 0);
    } else {
      return Array(1);
    }
  }

}
