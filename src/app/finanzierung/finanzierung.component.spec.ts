import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanzierungComponent } from './finanzierung.component';

describe('FinanzierungComponent', () => {
  let component: FinanzierungComponent;
  let fixture: ComponentFixture<FinanzierungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanzierungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanzierungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
