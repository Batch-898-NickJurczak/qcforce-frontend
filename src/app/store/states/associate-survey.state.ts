import { SurveyForm } from 'src/app/models/survey-form.model';

export interface AssociateSurvey {
    survey: SurveyForm ;
    loaded: boolean;
    loading: boolean;
    token: string;
    error: string;
}
