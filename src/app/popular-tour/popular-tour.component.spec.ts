import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTourComponent } from './popular-tour.component';

describe('PopularTourComponent', () => {
  let component: PopularTourComponent;
  let fixture: ComponentFixture<PopularTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
