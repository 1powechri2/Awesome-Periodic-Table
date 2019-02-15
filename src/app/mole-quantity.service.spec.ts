import { TestBed } from '@angular/core/testing';

import { MoleQuantityService } from './mole-quantity.service';

describe('MoleQuantityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoleQuantityService = TestBed.get(MoleQuantityService);
    expect(service).toBeTruthy();
  });
});
