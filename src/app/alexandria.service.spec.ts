import { TestBed } from '@angular/core/testing';

import { AlexandriaService } from './alexandria.service';

describe('AlexandriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlexandriaService = TestBed.get(AlexandriaService);
    expect(service).toBeTruthy();
  });
});
