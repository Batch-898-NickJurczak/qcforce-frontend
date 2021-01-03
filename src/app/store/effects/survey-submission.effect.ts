import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { SurveySubmissionService } from 'src/app/services/survey-submission.service';
import * as SubmissionActions from '../actions/survey-submission.action';

@Injectable()
export class SurveySubmissionEffects {
  submitSurvey$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubmissionActions.surveySubmit),
      exhaustMap((action) =>
        this.submissionService.postSurveySubmission(action.submission).pipe(
          map(() => SubmissionActions.submissionSuccess()),
          catchError((error) => of(SubmissionActions.submissionFailure({ error })))
        ).pipe(
          map(() => SubmissionActions.surveyReset())
        )
      )
    )
  );

  constructor(private actions$: Actions, private submissionService: SurveySubmissionService) {}
}
