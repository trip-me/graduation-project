import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnjoyWithUsComponent } from './enjoy-with-us.component';

describe('EnjoyWithUsComponent', () => {
  let component: EnjoyWithUsComponent;
  let fixture: ComponentFixture<EnjoyWithUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnjoyWithUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnjoyWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
