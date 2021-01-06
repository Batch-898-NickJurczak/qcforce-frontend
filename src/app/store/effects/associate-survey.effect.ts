import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, mergeMap } from 'rxjs/operators';
import { TakeSurveyService } from 'src/app/services/take-survey.service';
import * as AssociateSurveyActions from '../actions/associate-survey.action';


@Injectable()
export class AssociateSurveyEffects {
    surveyLoad$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AssociateSurveyActions.surveyLoad),
            mergeMap((action) => this.surveyService.getSurveyForm(action.inputToken)
                .pipe(
                    map((response) => {
                        if (response.body[0] === `expired`) {
                            return AssociateSurveyActions.surveyLoadFailureExpired();
                        }
                        else if (response.body[0] === `completed`) {
                            return AssociateSurveyActions.surveyLoadFailureCompleted();
                        }
                        else if (response.body[0] === `success`) {
                            return AssociateSurveyActions.surveyLoadSuccess(response[1]);
                        }
                        else {
                            return AssociateSurveyActions.surveyLoadFailure(response[0]);
                        }
                    })
                )
            )
        )
    );
constructor(private actions$: Actions<AssociateSurveyActions.AllAssociateSurveyActions>, private surveyService: TakeSurveyService) { }
}
