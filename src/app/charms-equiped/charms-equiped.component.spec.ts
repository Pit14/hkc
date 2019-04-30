import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharmsEquipedComponent } from './charms-equiped.component';

describe('CharmsEquipedComponent', () => {
  let component: CharmsEquipedComponent;
  let fixture: ComponentFixture<CharmsEquipedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharmsEquipedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharmsEquipedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
