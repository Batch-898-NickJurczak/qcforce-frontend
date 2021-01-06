import { Question } from "src/app/models/question.model";

export interface QuestionState {
    data: Question;
    loaded: boolean;
    loading: boolean;
  }