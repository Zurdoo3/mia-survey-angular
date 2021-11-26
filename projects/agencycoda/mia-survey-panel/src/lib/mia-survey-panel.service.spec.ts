import { TestBed } from '@angular/core/testing';

import { MiaSurveyPanelService } from './mia-survey-panel.service';

describe('MiaSurveyPanelService', () => {
  let service: MiaSurveyPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaSurveyPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
