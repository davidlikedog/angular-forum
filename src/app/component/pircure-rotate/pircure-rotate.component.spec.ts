import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PircureRotateComponent } from './pircure-rotate.component';

describe('PircureRotateComponent', () => {
  let component: PircureRotateComponent;
  let fixture: ComponentFixture<PircureRotateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PircureRotateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PircureRotateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
