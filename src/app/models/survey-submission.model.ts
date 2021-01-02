/**
 * Abstract representation of survey submission
 */
export interface SurveySubmission {
    id?: number;
    surveyId?: number;
    createdOn?:Date;
    questions?: String[];
    answers?: String[];
}