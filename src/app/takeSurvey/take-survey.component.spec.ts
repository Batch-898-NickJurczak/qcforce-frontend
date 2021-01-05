import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { SurveyForm } from '../models/survey-form.model';
import { TakeSurveyService } from '../services/take-survey.service';
import { TakeSurveyComponent } from './take-survey.component';

class MockRoute {
  params: { [key: string]: string } = { token: `48n613x938nm384n2b` };
  queryParams = of(this.params);
}

class MockService {
  getSurveyForm(token: string): any {
    return ['success', null];
  }
}

describe('TakeSurveyComponent', () => {
  let initialState;
  let store;
  let component: TakeSurveyComponent;
  let fixture: ComponentFixture<TakeSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState }),
        { provide: ActivatedRoute, useClass: MockRoute },
        { provide: TakeSurveyService, useClass: MockService },
      ],
      declarations: [TakeSurveyComponent],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    initialState = {
      associateSurvey: {
        survey: {
                id: 0,
                title: 'Test survey',
                createdBy: 'Dev team',
                createdOn: new Date(Date.now()),
                version: 0,
                questions: [],
                week: 0 },
        loaded: false,
        loading: false,
        token: '',
        error: '',
      },
    };
    store.setState(initialState);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeSurveyComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize token', () => {
    expect(component.token).toEqual(`48n613x938nm384n2b`);
  });

  it('should set the survey from the store data', () => {
    let survey: SurveyForm;
    component.survey.subscribe(componentSurvey => survey = componentSurvey);
    expect(survey).toEqual(initialState.associateSurvey.survey);
  });
});
