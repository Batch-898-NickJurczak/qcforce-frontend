import { Action, createReducer, on } from '@ngrx/store';
import { SurveySubmission } from 'src/app/models/survey-submission.model';
import * as SurveySubmissionActions from '../actions/survey-submission.action';

export const initialState: SurveySubmission = {
  id: 0,
  surveyId: 0,
  createdOn: new Date(Date.now()),
  employeeId: 0,
  batchId: 0,
  answers: [],
  loading: false,
};

const reducer = createReducer(
  initialState,
  on(SurveySubmissionActions.surveyUpdate, (state, { submission }) => ({
    id: submission.id,
    surveyId: submission.surveyId,
    createdOn: submission.createdOn,
    employeeId: submission.employeeId,
    batchId: submission.batchId,
    answers: submission.answers,
    loading: submission.loading,
  })),

  on(SurveySubmissionActions.surveyReset, (state) => ({
    id: 0,
    surveyId: 0,
    createdOn: new Date(Date.now()),
    employeeId: 0,
    batchId: 0,
    answers: [],
    loading: false,
  })),

  on(SurveySubmissionActions.surveySubmit, (state, { submission }) => ({
    id: submission.id,
    surveyId: submission.surveyId,
    createdOn: submission.createdOn,
    employeeId: submission.employeeId,
    batchId: submission.batchId,
    answers: submission.answers,
    loading: true,
  })),

  on(SurveySubmissionActions.submissionSuccess, (state) => ({
    id: state.id,
    surveyId: state.surveyId,
    createdOn: state.createdOn,
    employeeId: state.employeeId,
    batchId: state.batchId,
    answers: state.answers,
    loading: false
  })),
);

export function surveySubmissionReducer(state: SurveySubmission | undefined, action: Action) {
  return reducer(state, action);
}
