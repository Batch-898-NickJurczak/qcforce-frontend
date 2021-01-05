import { HttpClient } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { surveySubmit, surveyUpdate } from 'src/app/store';
import { SurveyFormComponent } from './survey-form.component';

/**
 * For mocking the Activated Route
 */
class MockRoute {}

/**
 * For mocking the HttpClient
 */
class MockHttp {}

describe('SurveyFormComponent', () => {
  let initialState;
  let store: MockStore;
  let component: SurveyFormComponent;
  let fixture: ComponentFixture<SurveyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState }),
        { provide: ActivatedRoute, useClass: MockRoute },
        { provide: HttpClient, useClass: MockHttp },
        { provide: FormBuilder, useClass: FormBuilder },
      ],
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
          questions: [
            {
              id: 0,
              createdOn: new Date(Date.now()),
              type: 'MULTIPLE_CHOICE',
              version: 0,
              question: ['A multiple choice question', 'Choice One', 'Choice Two'],
            },
            {
              id: 1,
              createdOn: new Date(Date.now()),
              type: 'PICK_FROM_RANGE',
              version: 0,
              question: ['A pick from range question', '1', '2', '3'],
            },
            {
              id: 2,
              createdOn: new Date(Date.now()),
              type: 'SHORT_ANSWER',
              version: 0,
              question: ['A short response question'],
            },
          ],
          week: 0,
        },
        loaded: false,
        loading: false,
        token: '',
        error: '',
      },
      submission: {
        data: {
          id: 0,
          surveyId: 0,
          createdOn: new Date(Date.now()),
          employeeId: 0,
          batchId: 0,
          answers: [],
        },
        loading: false,
        loaded: false,
      },
    };
    store.setState(initialState);

    fixture = TestBed.createComponent(SurveyFormComponent);
    component = fixture.componentInstance;

    // Assign input field after instantiation and reinitialize
    component.surveyForm = initialState.associateSurvey.survey;
    component.ngOnInit();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyFormComponent);
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
   * Ensures component can init with input being null
   */
  it('should create even with no survey', () => {
    component.surveyForm = null;
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  /**
   * Tests component addQuestion method
   */
  it('should add a question to the answers array when addQuestion() is called', () => {
    const currentLength = component.answers.length;
    component.addQuestion();
    expect(component.answers.length).toEqual(currentLength + 1);
  });

  /**
   * Tests component updateLocalSurvey method
   */
  it('should update the submission object when updateLocalSurvey() is called', () => {
    component.updateLocalSurvey();

    // Grab submission object that was altered with method
    const submission = component.submission;

    // Verify submission object was modified correctly
    expect(submission.surveyId).toEqual(component.surveyForm.id);
    expect(submission.createdOn).toBeTruthy();
    expect(submission.answers.length).toEqual(component.answers.length);
  });

  /**
   * Test component updateSurvey method
   */
  it('should call updateLocalSurvey() and dispatch surveyUpdate when updateSurvey() is called', () => {

    // Set up spy's to ensure methods were called
    spyOn(component, 'updateLocalSurvey');
    spyOn(store, 'dispatch');

    // Call method to test and read updated object
    component.updateSurvey();
    const submission = component.submission;

    // Ensure this method has been called
    expect(component.updateLocalSurvey).toHaveBeenCalled();

    // Ensure this action was raised
    expect(store.dispatch).toHaveBeenCalledWith(surveyUpdate({ submission }));

    // Ensure this action was not raised
    expect(store.dispatch).not.toHaveBeenCalledWith(surveySubmit({ submission }));
  });

  /**
   * Test component submitSurvey method
   */
  it('should call updateLocalSurvey() and dispatch surveySubmit when submitSurvey() is called', () => {

    // Set up spy's to ensure methods were called
    spyOn(component, 'updateLocalSurvey');
    spyOn(store, 'dispatch');

    // Call method to test and read updated object
    component.submitSurvey();
    const submission = component.submission;

    // Ensure this method has been called
    expect(component.updateLocalSurvey).toHaveBeenCalled();

    // Ensure this action was raised
    expect(store.dispatch).toHaveBeenCalledWith(surveySubmit({ submission }));
  });
});
