import { SurveySubmission } from 'src/app/models/survey-submission.model';
import * as SurveySubmissionActions from '../actions/survey-submission.action';

export type Action = SurveySubmissionActions.All;

export function postSurveyReducer(state: SurveySubmission, action: Action) {

    switch (action.type) {

        case SurveySubmissionActions.POST_SURVEY_SUBMISSION:
            return {...state, loading: true};

        case SurveySubmissionActions.POST_SURVEY_SUCCESS:
            return {...state, ...action.payload, loading: false};

        case SurveySubmissionActions.POST_SURVEY_FAILURE:
            return {...state, ...action.payload, loading: false};
    }
}