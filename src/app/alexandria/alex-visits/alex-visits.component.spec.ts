import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlexVisitsComponent } from './alex-visits.component';

describe('AlexVisitsComponent', () => {
  let component: AlexVisitsComponent;
  let fixture: ComponentFixture<AlexVisitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlexVisitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlexVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
