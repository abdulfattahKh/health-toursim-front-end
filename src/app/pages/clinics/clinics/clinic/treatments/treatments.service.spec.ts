import { TestBed } from '@angular/core/testing';

import { TreatmentsService } from './treatments.service';

describe('TreatmentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreatmentsService = TestBed.get(TreatmentsService);
    expect(service).toBeTruthy();
  });
});
