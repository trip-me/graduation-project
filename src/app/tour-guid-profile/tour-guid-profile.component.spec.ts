import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourGuidProfileComponent } from './tour-guid-profile.component';

describe('TourGuidProfileComponent', () => {
  let component: TourGuidProfileComponent;
  let fixture: ComponentFixture<TourGuidProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourGuidProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourGuidProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
