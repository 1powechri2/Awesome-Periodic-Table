import { TestBed } from '@angular/core/testing';

import { MolecularMassService } from './molecular-mass.service';

describe('MolecularMassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MolecularMassService = TestBed.get(MolecularMassService);
    expect(service).toBeTruthy();
  });
});
