import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlexRestaurantsComponent } from './alex-restaurants.component';

describe('AlexRestaurantsComponent', () => {
  let component: AlexRestaurantsComponent;
  let fixture: ComponentFixture<AlexRestaurantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlexRestaurantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlexRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
