import { TestBed } from '@angular/core/testing';

import { PeriodicTableService } from './periodic-table.service';

describe('PeriodicTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeriodicTableService = TestBed.get(PeriodicTableService);
    expect(service).toBeTruthy();
  });
});
