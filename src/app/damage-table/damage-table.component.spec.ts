import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageTableComponent } from './damage-table.component';

describe('DamageTableComponent', () => {
  let component: DamageTableComponent;
  let fixture: ComponentFixture<DamageTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamageTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
