import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WohnungenComponent } from './wohnungen.component';

describe('WohnungenComponent', () => {
  let component: WohnungenComponent;
  let fixture: ComponentFixture<WohnungenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WohnungenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WohnungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});