import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { AssociateTokenInterceptor } from './associate-token.interceptor';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AssociateSurvey } from '../store';
import { TakeSurveyService } from '../services/take-survey.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AssociateTokenInterceptor', () => {

    let store: MockStore;
    let service: TakeSurveyService;
    let httpMock: HttpTestingController;

    const initialState: AssociateSurvey = {
        survey: null,
        loaded: false,
        loading: false,
        token: 'yugaa738279ns25vbns0mdm093n9m',
        error: ''
    };

    beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers:
            [ provideMockStore({initialState}),
                TakeSurveyService,
                {provide: HTTP_INTERCEPTORS, useClass: AssociateTokenInterceptor, multi: true}
            ],
    }).compileComponents();
    }));

    beforeEach(() => {
        store = TestBed.inject(MockStore);
        service = TestBed.inject(TakeSurveyService);
        httpMock = TestBed.inject(HttpTestingController);

    });
    afterEach( () => {
        httpMock.verify();
    });

    it ('should add the token into the HTTP header', () => {
        service.getSurveyForm('').subscribe(res => {
            expect(res).toBeTruthy();
        });
        const httpReq = httpMock.expectOne(`http://survey/`);
        expect(httpReq.request.headers.has(`Authorization`)).toContain(`Bearer ${initialState.token}`);
    });

});


