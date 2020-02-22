import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideMeComponent } from './guide-me.component';

describe('GuideMeComponent', () => {
  let component: GuideMeComponent;
  let fixture: ComponentFixture<GuideMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
