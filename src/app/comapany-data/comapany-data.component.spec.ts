import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComapanyDataComponent } from './comapany-data.component';

describe('ComapanyDataComponent', () => {
  let component: ComapanyDataComponent;
  let fixture: ComponentFixture<ComapanyDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComapanyDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComapanyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
