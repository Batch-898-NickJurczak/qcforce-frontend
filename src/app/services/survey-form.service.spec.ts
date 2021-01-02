import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SurveyFormService } from './survey-form.service';

class MockHttp {

}

describe('SurveyFormService', () => {
  let service: SurveyFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: HttpClient, useClass: MockHttp}]
    });
    service = TestBed.inject(SurveyFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
