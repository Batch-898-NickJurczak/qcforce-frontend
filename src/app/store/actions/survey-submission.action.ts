import { createAction, props } from '@ngrx/store';
import { SurveySubmission } from 'src/app/models/survey-submission.model';

/**
 * Subset of actions related to loading of a survey for an associate
 * to fill out and the name of the module where the action will dispatched;
 */
export const SUBMISSION_RESET = '[Take Survey] Submission Reset';
export const SUBMISSION_UPDATE = '[Take Survey] Submission Update';
export const SUBMISSION_SUBMIT = '[Take Survey] Submission Submit';
export const SUBMISSION_SUCCESS = '[Take Survey] Submission Success';
export const SUBMISSION_FAILURE = '[Take Survey] Submission Failure';

export const submissionReset = createAction(
  SUBMISSION_RESET
);

export const submissionUpdate = createAction(
  SUBMISSION_UPDATE,
  props<{submission: SurveySubmission}>()
);

export const submissionSubmit = createAction(
  SUBMISSION_SUBMIT,
  props<{submission: SurveySubmission}>()
);

export const submissionSuccess = createAction(
  SUBMISSION_SUCCESS
);

export const submissionFailure = createAction(
  SUBMISSION_FAILURE,
  props<{error: any}>()
);
