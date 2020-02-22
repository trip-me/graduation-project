import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlexandriaComponent } from './alexandria.component';

describe('AlexandriaComponent', () => {
  let component: AlexandriaComponent;
  let fixture: ComponentFixture<AlexandriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlexandriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlexandriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
