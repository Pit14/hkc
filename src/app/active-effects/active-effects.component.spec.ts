import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveEffectsComponent } from './active-effects.component';

describe('ActiveEffectsComponent', () => {
  let component: ActiveEffectsComponent;
  let fixture: ComponentFixture<ActiveEffectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveEffectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
