import { HttpClient, HttpResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { TakeSurveyService } from './take-survey.service';

class MockHttp {
  public get(URL: string): Observable<HttpResponse<any>> {
    const response: HttpResponse<any> = new HttpResponse({ body: [`message`, null] });
    return of(response);
  }
}
describe('TakeSurveyService', () => {
  let service: TakeSurveyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useClass: MockHttp }],
    });
    service = TestBed.inject(TakeSurveyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list with a string message and an object null', () => {
    const returned = service.getSurveyForm('');
    expect(returned[0]).toEqual(`message`);
    expect(returned[1]).toEqual(null);
  });
});
