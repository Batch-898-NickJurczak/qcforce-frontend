import { SurveyForm } from 'src/app/models/survey-form.model';
import { AssociateSurvey } from '../states/associate-survey.state';
import * as AssociateSurveyActions from '../actions/associate-survey.action';
import { Action, createReducer, on } from '@ngrx/store';

const initialSurvey: SurveyForm = {
    id: 0,
    title: '',
    createdBy: '',
    createdOn: new Date(Date.now()),
    version: 0,
    questions: [],
    week: 0,
};

const initialState: AssociateSurvey = {
    survey: initialSurvey,
    loaded: false,
    loading: false,
    token: '',
    error: ''
};

const reducer = createReducer(
    initialState,
    on(AssociateSurveyActions.surveyLoad, (state, {inputToken}) => ({
        ...state,
        token: inputToken
    })),
    on(AssociateSurveyActions.surveyLoadSuccess, (state, {inputSurvey}) => ({
        ...state,
        survey: inputSurvey
    })),
    on(AssociateSurveyActions.surveyLoadFailure, (state, {inputError}) => ({
        ...state,
        error: inputError
    }))
);

export function associateSurveyReducer(state: AssociateSurvey | undefined, action: Action) {
    return reducer(state, action);
}
