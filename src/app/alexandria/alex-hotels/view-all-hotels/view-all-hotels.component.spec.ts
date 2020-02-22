import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllHotelsComponent } from './view-all-hotels.component';

describe('ViewAllHotelsComponent', () => {
  let component: ViewAllHotelsComponent;
  let fixture: ComponentFixture<ViewAllHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllHotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
