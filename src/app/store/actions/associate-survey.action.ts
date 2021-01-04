import { createAction, props } from '@ngrx/store';
import { SurveyForm } from 'src/app/models/survey-form.model';

export const surveyLoad = createAction(
    '[Take Survey] Survey Load',
    props<{ inputToken: string }>()
);

export const surveyLoadSuccess = createAction(
    '[Take Survey] Survey Load Success',
    props<{ inputSurvey: SurveyForm }>()
);

export const surveyLoadFailure = createAction(
    '[Take Survey] Survey Load Failure',
    props<{ inputError: string }>()
);

export const surveyLoadFailureExpired = createAction(
    '[Take Survey] Survey Load Failure Token Expired'
);

export const surveyLoadFailureCompleted = createAction(
    '[Take Survey] Survey Load Failure Survey Completed'

);
