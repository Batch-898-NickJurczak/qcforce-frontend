import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import * as ReportActions from '../actions/reports.action';
import { ReportsService } from '../services/reports.service';

@Injectable()
export class ReportsEffect {

  getBatch = createEffect(() => {
    return this.actions.pipe(
      ofType(ReportActions.getBatches),
      exhaustMap(() => {
        return this.reportsService.getBatches().pipe(
          map((batch) => ReportActions.getBatchesSuccess({ payload: batch })),
          catchError((error) => of(ReportActions.getBatchesError()))
        );
      })
    );
  });

  getAnswers = createEffect(() => {
    return this.actions.pipe(
      ofType(ReportActions.getAnswers),
      exhaustMap(() => {
        return this.reportsService.getAnswers().pipe(
          map((answers) => ReportActions.getAnswersSuccess({ payload: answers })),
          catchError((error) => of(ReportActions.getAnswersError()))
        );
      })
    );
  });

  constructor(private actions: Actions, private reportsService: ReportsService) { }
  
}
