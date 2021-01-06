import { RouterReducerState } from '@ngrx/router-store';

import { ReportsState } from './reports.state';
import { BatchesState } from './batches.state';
import { AssociatesState } from './associates.state';
import { SurveyFormState } from '..';
import { AssociateSurvey } from './associate-survey.state';

export * from './reports.state';
export * from './batches.state';
export * from './associates.state';
export * from './survey-form.state';
export * from './associate-survey.state';

export interface AppState {
  router: RouterReducerState<any>;
  reports: ReportsState;
  batches: BatchesState;
  associates: AssociatesState;
  surveyForm: SurveyFormState;
  associateSurvey: AssociateSurvey;
}
