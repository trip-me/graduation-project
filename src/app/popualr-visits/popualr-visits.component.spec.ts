import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopualrVisitsComponent } from './popualr-visits.component';

describe('PopualrVisitsComponent', () => {
  let component: PopualrVisitsComponent;
  let fixture: ComponentFixture<PopualrVisitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopualrVisitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopualrVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
