import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, mergeMap } from 'rxjs/operators';
import { TakeSurveyService } from 'src/app/services/take-survey.service';
import * as AssociateSurveyActions from '../actions/associate-survey.action';


@Injectable()
export class AssociateSurveyEffects {
    surveyLoad$ = createEffect(() =>
        this.actions$.pipe(
            ofType('[Take Survey] Survey Load'),
            mergeMap((action) => this.surveyService.getSurveyForm(action.inputToken)
                .pipe(
                    map((response) => {
                        if (response.body[0] === `expired`) {
                            return {type: '[Take Survey] Survey Load Failure Token Expired'};
                        }
                        else if (response.body[0] === `completed`) {
                            return {type: '[Take Survey] Survey Load Failure Survey Completed'};
                        }
                        else if (response.body[0] === `success`) {
                            return {type: '[Take Survey] Survey Load Success', prop: {inputSurvey: response.body[1]}};
                        }
                        else {
                            return {type: '[Take Survey] Survey Load Failure', prop: {inputError: response.body[1]}};
                        }
                    })
                )
            )
        )
    );
constructor(private actions$: Actions<AssociateSurveyActions.AllAssociateSurveyActions>, private surveyService: TakeSurveyService) { }
}
