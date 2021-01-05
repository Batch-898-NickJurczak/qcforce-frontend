import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { environment } from 'src/environments/environment';
import { SurveysService } from '../services/surveys.service';
import { TakeSurveyService } from '../services/take-survey.service';
import { AssociateTokenInterceptor } from './associate-token.interceptor';

describe('Associate Token Interceptor', () => {
  let initialState;
  let store: MockStore;
  let service: TakeSurveyService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AssociateTokenInterceptor,
          multi: true,
        },
        { provide: TakeSurveyService, useClass: TakeSurveyService },
      ],
    });
    store = TestBed.inject(MockStore);
    service = TestBed.inject(TakeSurveyService);
    httpMock = TestBed.inject(HttpTestingController);
    initialState  = {
        associateSurvey: {
          survey: null,
          loaded: false,
          loading: false,
          token: 'yugaa738279ns25vbns0mdm093n9m',
          error: '',
        },
      };
    store.setState(initialState);
  });

  it('service should be created for tests', () => {
    expect(service).toBeTruthy();
  });

  it('should add the token into the HTTP header', fakeAsync(() => {

    // Make http request with service
    service.getSurveyForm('').subscribe((response) => {
      expect(response).toBeTruthy();
    });

    // Simulate an asynchronous call
    tick();

    // Check request and ensure header has auth set with token
    const httpReq = httpMock.expectOne(`survey/`);
    expect(httpReq.request.headers.get(`Authorization`)).toBe(`Bearer ${initialState.associateSurvey.token}`);
  }));

  it('should not try to add the token to requests if the token state is null', fakeAsync(() => {

    // Set token to empty
    initialState.associateSurvey.token = '';
    store.setState(initialState);

    // Make http request with service
    service.getSurveyForm('').subscribe((response) => {
      expect(response).toBeTruthy();
    });

    // Simulate an asynchronous call
    tick();

    // Check request and ensure header does not have auth set
    const httpReq = httpMock.expectOne(`survey/`);
    expect(httpReq.request.headers.has(`Authorization`)).toEqual(false);
  }));
});
