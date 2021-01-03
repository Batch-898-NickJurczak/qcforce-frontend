import { SurveySubmission } from 'src/app/models/survey-submission.model';

export interface SubmissionState {
  data: SurveySubmission;
  loaded: boolean;
  loading: boolean;
}
