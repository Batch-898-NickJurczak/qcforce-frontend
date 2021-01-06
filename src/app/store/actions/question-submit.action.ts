import { createAction, props } from "@ngrx/store";
import { Question } from "src/app/models/question.model";

//Defines actions that trigger the question reducer
export const questionReset = createAction("[New Question] Question Reset");

export const deleteQuestion = createAction(
  "[New Question] Question Delete",
  props<{ submission: Question }>()
);

export const questionUpdate = createAction(
  "[New Question] Question Update",
  props<{ submission: Question }>()
);

export const questionSubmit = createAction(
  "[New Question] Survey Submit",
  props<{ submission: Question }>()
);

export const submissionSuccess = createAction(
  "[New Question] Submission Success"
);

export const submissionFailure = createAction(
  "[New Question] Submission Failure",
  props<{ error: any }>()
);

//Choice Actions
export const deleteChoice = createAction(
  "[New Question] Question Delete Choice",
  props<{ submission: Question }>()
);
