import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TakeSurveyService } from '../services/take-survey.service';
import { AssociateTokenInterceptor } from './associate-token.interceptor';

describe('Associate Token Interceptor', () => {
  const initialState = {
    associateSurvey: {
      survey: null,
      loaded: false,
      loading: false,
      token: 'yugaa738279ns25vbns0mdm093n9m',
      error: '',
    },
  };

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
  });

  it('service should be created for tests', () => {
    expect(service).toBeTruthy();
  });

  it('should add the token into the HTTP header', fakeAsync(() => {
    store.setState(initialState);
    service.getSurveyForm('').subscribe((response) => {
      expect(response).toBeTruthy();
    });

    tick();
    const httpReq = httpMock.expectOne(`survey/`);
    expect(httpReq.request.headers.get(`Authorization`)).toBe(`Bearer ${initialState.associateSurvey.token}`);
  }));

  // TODO: Add test to check if token is added to requests outside of the Take Survey Module (it shouldn't)

  // TODO: Add test to make sure that if token is null, does not try to add to request
});
