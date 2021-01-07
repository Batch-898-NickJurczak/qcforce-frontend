/**
 *  SurveyForm Model interface defines all properties
 *  which this application processes
 */
import { Question } from './question.model';

export interface SurveyForm {
  id: number;
  title: string;
  createdBy: string;
  createdOn: Date;
  version: number;
  questions?: Question[];
  week?: number;
}
