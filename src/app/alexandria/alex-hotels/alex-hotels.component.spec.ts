import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlexHotelsComponent } from './alex-hotels.component';

describe('AlexHotelsComponent', () => {
  let component: AlexHotelsComponent;
  let fixture: ComponentFixture<AlexHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlexHotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlexHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
