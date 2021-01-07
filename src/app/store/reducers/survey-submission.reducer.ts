import { Action, createReducer, on } from '@ngrx/store';
import { SurveySubmission } from 'src/app/models/survey-submission.model';
import * as SurveySubmissionActions from '../actions/survey-submission.action';
import { SubmissionState } from '../states';

const initialSubmission: SurveySubmission = {
  id: 0,
  surveyId: 0,
  createdOn: new Date(Date.now()),
  employeeId: 0,
  batchId: 0,
  answers: []
};

const initialState: SubmissionState = {
  data: initialSubmission,
  loading: false,
  loaded: false
};

const reducer = createReducer(
  initialState,
  on(SurveySubmissionActions.surveyUpdate, (state, { submission }) => ({
    ...state,
    data: submission
  })),

  on(SurveySubmissionActions.surveyReset, (state) => ({
    ...state,
    data: initialSubmission,
    loading: false,
    loaded: false
  })),

  on(SurveySubmissionActions.surveySubmit, (state, { submission }) => ({
    ...state,
    data: submission,
    loading: true
  })),

  on(SurveySubmissionActions.submissionSuccess, (state) => ({
    ...state,
    loading: false
  })),
);

export function surveySubmissionReducer(state: SubmissionState | undefined, action: Action) {
  return reducer(state, action);
}
