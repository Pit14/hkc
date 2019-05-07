import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharmsEquippedComponent } from './charms-equipped.component';

describe('CharmsEquippedComponent', () => {
  let component: CharmsEquippedComponent;
  let fixture: ComponentFixture<CharmsEquippedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharmsEquippedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharmsEquippedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
