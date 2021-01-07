import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, mergeMap } from 'rxjs/operators';
import { SurveyForm } from 'src/app/models/survey-form.model';
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
                        if (response[0] === `expired`) {
                            return AssociateSurveyActions.surveyLoadFailureExpired();
                        }
                        else if (response[0] === `completed`) {
                            return AssociateSurveyActions.surveyLoadFailureCompleted();
                        }
                        else if (response[0] === `success`) {
                            const inputSurvey: SurveyForm = (response[1]);
                            return AssociateSurveyActions.surveyLoadSuccess({inputSurvey});
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
