import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AusstattungComponent } from './ausstattung.component';

describe('AusstattungComponent', () => {
  let component: AusstattungComponent;
  let fixture: ComponentFixture<AusstattungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AusstattungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AusstattungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
