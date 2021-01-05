import { HttpClient, HttpResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { SurveySubmission } from '../models/survey-submission.model';

import { SurveySubmissionService } from './survey-submission.service';

/**
 *  Set up mock HttpClient to handle a post request
 */
class MockHttp {
  public post(URL: string, surveySubmission: SurveySubmission): Observable<any> {
    const response: HttpResponse<any> = new HttpResponse({ body: surveySubmission });
    return of(response);
  }
}

describe('SurveySubmissionService', () => {
  let service: SurveySubmissionService;
  let surveySubmission: SurveySubmission;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ { provide: HttpClient , useClass: MockHttp } ]
    });
    service = TestBed.inject(SurveySubmissionService);

    // Set up survey object for testing
    surveySubmission = {
      id: 0,
      surveyId: 0,
      createdOn: new Date(Date.now()),
      employeeId: 0,
      batchId: 0,
      answers: ['I like fries', 'I like all potatoes'],
    };
  });

  /**
   * Test that component builds properly
   */
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /**
   * Test that service is not modifying object on input,
   * and unpacking payload from body in the return
   */
  it('should successfully call post method, pass it the input, and return the output', () => {

    const returnedSurvey = service.postSurveySubmission(surveySubmission);
    expect(returnedSurvey).toEqual(surveySubmission);

  });
});
