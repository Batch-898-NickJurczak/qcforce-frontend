import { Action } from '@ngrx/store';
import { SurveySubmission } from 'src/app/models/survey-submission.model';

export const POST_SURVEY_SUBMISSION = 'Post survey submission';
export const POST_SURVEY_SUCCESS = 'Post survey success';
export const POST_SURVEY_FAILURE = 'Post survey failure';

export class PostSurveySubmission implements Action {
  readonly type = POST_SURVEY_SUBMISSION;
  constructor(public payload: SurveySubmission) {}
}

export class PostSurveySuccess implements Action {
    readonly type = POST_SURVEY_SUCCESS;
    constructor(public payload?: any) {}
}

export class PostSurveyFailure implements Action {
readonly type = POST_SURVEY_FAILURE;
constructor(public payload: any) {}
}

export type All = PostSurveySubmission | PostSurveySuccess | PostSurveyFailure;
