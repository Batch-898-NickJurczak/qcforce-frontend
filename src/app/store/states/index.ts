import { RouterReducerState } from '@ngrx/router-store';

import { ReportsState } from './reports.state';
import { BatchesState } from './batches.state';
import { AssociatesState } from './associates.state';
import { SubmissionState } from './submission.state';

export * from './reports.state';
export * from './batches.state';
export * from './associates.state';
export * from './submission.state';


export interface AppState {
  router: RouterReducerState<any>;
  reports: ReportsState;
  batches: BatchesState;
  associates: AssociatesState;
  submission: SubmissionState;
}
