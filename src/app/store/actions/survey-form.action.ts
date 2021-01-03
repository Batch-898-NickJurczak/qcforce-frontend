import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { SurveyForm } from 'src/app/models/survey-form.model';

export const SUBMIT_SURVEYFORM = '[SURVEYFORM] Add';

export class SubmitSurveyForm implements Action {
  readonly type = SUBMIT_SURVEYFORM;

  constructor(public payload: SurveyForm) {}
}

export type SurveyFormActions = SubmitSurveyForm;
