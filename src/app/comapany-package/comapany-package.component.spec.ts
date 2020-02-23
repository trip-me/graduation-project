import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComapanyPackageComponent } from './comapany-package.component';

describe('ComapanyPackageComponent', () => {
  let component: ComapanyPackageComponent;
  let fixture: ComponentFixture<ComapanyPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComapanyPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComapanyPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
