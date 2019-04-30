import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeMaskComponent } from './life-mask.component';

describe('LifeMaskComponent', () => {
  let component: LifeMaskComponent;
  let fixture: ComponentFixture<LifeMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
