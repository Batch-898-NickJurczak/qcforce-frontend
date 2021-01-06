import { Action, createReducer, on } from "@ngrx/store";
import { Question } from "src/app/models/question.model";
import * as QuestionSubmitActions from "../actions/question-submit.action";
import { QuestionState } from "../states/question.state";

export const initialQuestion: Question = {
  id: 0,
  createdOn: new Date(Date.now()),
  type: "",
  version: 0,
  question: [],
};

export const initialState: QuestionState = {
  data: initialQuestion,
  loading: false,
  loaded: false,
};

const reducer = createReducer(
  initialState,
  on(QuestionSubmitActions.questionUpdate, (state, { submission }) => ({
    ...state,
    data: submission,
  })),

  on(QuestionSubmitActions.questionReset, (state) => ({
    ...state,
    data: initialQuestion,
    loading: false,
    loaded: false,
  })),

  on(QuestionSubmitActions.questionSubmit, (state, { submission }) => ({
    ...state,
    data: submission,
    loading: true,
  })),

  on(QuestionSubmitActions.submissionSuccess, (state) => ({
    ...state,
    loading: false,
  }))
);

export function questionSubmissionReducer(
  state: QuestionState | undefined,
  action: Action
) {
  return reducer(state, action);
}
