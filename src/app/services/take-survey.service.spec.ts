import { HttpClient, HttpResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { SurveySubmission } from '../models/survey-submission.model';
import { TakeSurveyService } from './take-survey.service';

/**
 *  Set up mock HttpClient to handle a get request returning format expected
 */
class MockHttp {
  public get(URL: string): Observable<HttpResponse<any>> {
    const response: HttpResponse<any> = new HttpResponse({ body: [`message`, null] });
    return of(response);
  }
}

describe('TakeSurveyService', () => {
  let service: TakeSurveyService;
  let surveySubmission: SurveySubmission;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useClass: MockHttp }],
    });
    service = TestBed.inject(TakeSurveyService);

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
   * Test that service is unpacking payload from body
   * and not modifying the data within.
   */
  it('should return a list with a string message and an object null', () => {

    // Unpack returned subscribable
    let returned;
    service.getSurveyForm('').subscribe((response) => (returned = response));

    // Verify content is as expected
    expect(returned[0]).toEqual(`message`);
    expect(returned[1]).toEqual(null);
  });
});
