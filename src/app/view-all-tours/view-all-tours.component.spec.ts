import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllToursComponent } from './view-all-tours.component';

describe('ViewAllToursComponent', () => {
  let component: ViewAllToursComponent;
  let fixture: ComponentFixture<ViewAllToursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllToursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
