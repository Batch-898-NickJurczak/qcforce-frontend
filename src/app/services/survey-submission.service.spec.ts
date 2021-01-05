import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SurveySubmissionService } from './survey-submission.service';

class MockHttp{

}

describe('SurveySubmissionService', () => {
  let service: SurveySubmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ { provide: HttpClient , useClass: MockHttp } ]
    });
    service = TestBed.inject(SurveySubmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
