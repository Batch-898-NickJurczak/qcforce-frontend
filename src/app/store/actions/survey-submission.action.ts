import { createAction, props } from '@ngrx/store';
import { SurveySubmission } from 'src/app/models/survey-submission.model';

export const surveyReset = createAction(
  '[Take Survey] Survey Reset'
);

export const surveyUpdate = createAction(
  '[Take Survey] Survey Update',
  props<{submission: SurveySubmission}>()
);

export const surveySubmit = createAction(
  '[Take Survey] Survey Submit',
  props<{submission: SurveySubmission}>()
);

export const submissionSuccess = createAction(
  '[Take Survey] Submission Success'
);

export const submissionFailure = createAction(
  '[Take Survey] Submission Failure',
  props<{error: any}>()
);
