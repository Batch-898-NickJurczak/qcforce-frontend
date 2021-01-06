/**
 * Abstract representation of question data
 */
export interface Question {
  id: number;
  createdOn: Date;
  type: string;
  version: number;
  question: string[];
}

