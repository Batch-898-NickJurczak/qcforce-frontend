import { TestBed } from '@angular/core/testing';

import { SurveySubmissionService } from './survey-submission.service';

describe('SurveySubmissionService', () => {
  let service: SurveySubmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveySubmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
