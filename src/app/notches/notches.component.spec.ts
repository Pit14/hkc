import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotchesComponent } from './notches.component';

describe('NotchesComponent', () => {
  let component: NotchesComponent;
  let fixture: ComponentFixture<NotchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
