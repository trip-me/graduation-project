import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllVisitsComponent } from './view-all-visits.component';

describe('ViewAllVisitsComponent', () => {
  let component: ViewAllVisitsComponent;
  let fixture: ComponentFixture<ViewAllVisitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllVisitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
