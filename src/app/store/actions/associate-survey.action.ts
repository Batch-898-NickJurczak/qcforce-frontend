import { createAction, props, union } from '@ngrx/store';
import { SurveyForm } from 'src/app/models/survey-form.model';

/**
 * Subset of actions related to loading of a survey for an associate
 * to fill out and the name of the module where the action will dispatched;
 */
export const SURVEY_LOAD = '[Take Survey] Survey Load';
export const SURVEY_LOAD_SUCCESS = '[Take Survey] Survey Load Success';
export const SURVEY_LOAD_FAILURE = '[Take Survey] Survey Load Failure';
export const SURVEY_LOAD_FAILURE_EXPIRED = '[Take Survey] Survey Load Failure Token Expired';
export const SURVEY_LOAD_FAILURE_COMPLETED = '[Take Survey] Survey Load Failure Survey Completed';


export const surveyLoad = createAction(
    SURVEY_LOAD,
    props<{ inputToken: string }>()
);

export const surveyLoadSuccess = createAction(
    SURVEY_LOAD_SUCCESS,
    props<{ inputSurvey: SurveyForm }>()
);

export const surveyLoadFailure = createAction(
    SURVEY_LOAD_FAILURE,
    props<{ inputError: string }>()
);

export const surveyLoadFailureExpired = createAction(
    SURVEY_LOAD_FAILURE_EXPIRED
);

export const surveyLoadFailureCompleted = createAction(
    SURVEY_LOAD_FAILURE_COMPLETED

);

const allActions = union({
    surveyLoad,
    surveyLoadFailure,
    surveyLoadSuccess,
    surveyLoadFailureExpired,
    surveyLoadFailureCompleted
});

export type AllAssociateSurveyActions = typeof allActions;
