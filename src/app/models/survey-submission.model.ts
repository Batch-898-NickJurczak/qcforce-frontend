/**
 * Abstract representation of survey submission
 */
export interface SurveySubmission {
  id: number;
  surveyId: number;
  createdOn: Date;
  employeeId?: number;
  batchId?: number;
  answers?: string[];
}

