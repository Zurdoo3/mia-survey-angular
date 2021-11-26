import { TestBed } from '@angular/core/testing';

import { MiaSurveyViewerService } from './mia-survey-viewer.service';

describe('MiaSurveyViewerService', () => {
  let service: MiaSurveyViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaSurveyViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
