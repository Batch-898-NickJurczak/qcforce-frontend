import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import { SurveySubmissionService } from 'src/app/services/survey-submission.service';
import * as surveySubmissionActions from '../actions/survey-submission.action';

export type Action = surveySubmissionActions.All;

@Injectable()
export class SurveySubmissionEffects {
  constructor(private actions$: Actions, private service: SurveySubmissionService) {}

  submitSurveySubmission$ = createEffect(() =>
    this.actions$.pipe(
      ofType(surveySubmissionActions.POST_SURVEY_SUBMISSION),
      mergeMap((action: surveySubmissionActions.PostSurveySubmission) => {
        this.service.postSurveySubmission(action.payload);
      }))
  );
}
