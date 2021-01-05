import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { exhaustMap, map, mergeMap } from 'rxjs/operators';
import { TakeSurveyService } from 'src/app/services/take-survey.service';
import * as AssociateSurveyActions from '../actions/associate-survey.action';
import { AssociateSurveyAction } from '../actions/associate-survey.action';


@Injectable()
export class AssociateSurveyEffects {
    surveyLoad$ = createEffect(() =>
        this.actions$.pipe(
            ofType('[Take Survey] Survey Load'),
            mergeMap((action) =>
                {this.surveyService.getSurveyForm(action.inputToken).subscribe(
                    resp =>  AssociateSurveyActions.surveyLoadFailureExpired());
                return of(null);
                }

                )
            )
        );
                //this.surveyService.getSurveyForm(action.inputToken).pipe(
                    //map((request) => {type: '[Take Survey] Survey Load Failure Token Expired'}

constructor(private actions$: Actions<AssociateSurveyAction>, private surveyService: TakeSurveyService) { }
}