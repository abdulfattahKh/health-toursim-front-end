import { TestBed } from '@angular/core/testing';

import { UtiliesService } from './utilies.service';

describe('UtiliesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtiliesService = TestBed.get(UtiliesService);
    expect(service).toBeTruthy();
  });
});
