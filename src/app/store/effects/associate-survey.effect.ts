import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap } from 'rxjs/operators';
import { TakeSurveyService } from 'src/app/services/take-survey.service';
import * as AssociateSurveyActions from '../actions/associate-survey.action';


@Injectable()
export class AssociateSurveyEffects {
    surveyLoad$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AssociateSurveyActions.surveyLoad),
            exhaustMap((action) =>
                this.surveyService.getSurveyForm(action.inputToken).pipe(
                    exhaustMap((response) => {
                        if (response.body[0] === `expired`) {
                            AssociateSurveyActions.surveyLoadFailureExpired();
                        }
                        else if (response.body[0] === `completed`) {
                            AssociateSurveyActions.surveyLoadFailureCompleted();
                        }
                        else if (response.body[0] === `success`) {
                            AssociateSurveyActions.surveyLoadSuccess(response.body[1]);
                        }
                        else {
                            AssociateSurveyActions.surveyLoadFailure(response.body[0]);
                        }
                        return response.body;
                    })
                )
            )
        )
    );
constructor(private actions$: Actions, private surveyService: TakeSurveyService) { }
}