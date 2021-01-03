import { createReducer, on } from '@ngrx/store';
import { SurveyForm } from 'src/app/models/survey-form.model';
import * as SurveyFormAction from '../actions/survey-form.action';
import { SurveySubmission } from 'src/app/models/survey-submission.model';

export function surveyFormReducer(state: SurveyForm[], action: SurveyFormAction.SurveyFormActions) {
  switch (action.type) {
    case SurveyFormAction.SUBMIT_SURVEYFORM:
      return [...state, action.payload];
    default:
      return state;
  }
}
