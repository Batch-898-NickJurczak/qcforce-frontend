import { createSelector } from '@ngrx/store';
import { ReportsState } from '../states';

export const selectReportsState = (state) => state.reports;
const _selectBatchFilter = (state: ReportsState) => state.batchFilter;
const _selectWeekFilter = (state: ReportsState) => state.weekFilter;
const _selectTitle = (state: ReportsState) => {
    let reportTitle = '';
    if (state.batchFilter === 'All'){
      reportTitle = 'All Batches';
    } else if (state.batchFilter === 'Average') {
      reportTitle = 'Average Across Batches';
    }
    for (let option of state.batchFilterOptions.slice(2)) {
        if (state.batchFilter === option) {
            reportTitle = option;
        }
    }
    return reportTitle;
}
export const selectBatchFilter = createSelector(selectReportsState, _selectBatchFilter);
export const selectWeekFilter = createSelector(selectReportsState, _selectWeekFilter);
export const selectTitle = createSelector(selectReportsState, _selectTitle);

