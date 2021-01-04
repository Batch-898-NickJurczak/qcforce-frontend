import { HttpClient, HttpResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';


import { TakeSurveyService } from './take-survey.service';

class MockHttp{

}

describe('TakeSurveyService', () => {
  let service: TakeSurveyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ { provide: HttpClient , useClass: MockHttp } ]
    });
    service = TestBed.inject(TakeSurveyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
