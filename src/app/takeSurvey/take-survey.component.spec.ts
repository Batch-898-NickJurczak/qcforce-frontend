import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { SurveyForm } from '../models/survey-form.model';
import { TakeSurveyComponent } from './take-survey.component';

/**
 * For mocking the Activated Route to ensure that
 * component can read token out of the url params
 */
class MockRoute {
  params: { [key: string]: string } = { token: `48n613x938nm384n2b` };
  queryParams = of(this.params);
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
      ],
      declarations: [TakeSurveyComponent],
    }).compileComponents();
    store = TestBed.inject(MockStore);

    // Set up initial state for use in mock store
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

  /**
   * Ensure component can be built
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Ensures component can grab token from url params
   */
  it('should initialize token', () => {
    expect(component.token).toEqual(`48n613x938nm384n2b`);
  });

  /**
   * Ensures component sets the internal survey value off
   * of what is in the store
   */
  it('should set the survey from the store data', () => {
    let survey: SurveyForm;
    component.survey.subscribe(componentSurvey => survey = componentSurvey);
    expect(survey).toEqual(initialState.associateSurvey.survey);
  });
});
