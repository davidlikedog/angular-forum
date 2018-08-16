import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOneBlockComponent } from './home-one-block.component';

describe('HomeOneBlockComponent', () => {
  let component: HomeOneBlockComponent;
  let fixture: ComponentFixture<HomeOneBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOneBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOneBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
