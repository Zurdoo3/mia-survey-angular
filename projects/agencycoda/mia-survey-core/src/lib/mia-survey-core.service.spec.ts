import { TestBed } from '@angular/core/testing';

import { MiaSurveyCoreService } from './mia-survey-core.service';

describe('MiaSurveyCoreService', () => {
  let service: MiaSurveyCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaSurveyCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
