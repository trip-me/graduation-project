import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourGuidComponent } from './tour-guid.component';

describe('TourGuidComponent', () => {
  let component: TourGuidComponent;
  let fixture: ComponentFixture<TourGuidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourGuidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourGuidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
