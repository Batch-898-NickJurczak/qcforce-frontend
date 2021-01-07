import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SurveySubmission } from '../models/survey-submission.model';

@Injectable({
  providedIn: 'root',
})
export class SurveySubmissionService {
  baseURL = '';

  constructor(private http: HttpClient) {}

  postSurveySubmission(surveySubmission: SurveySubmission): Observable<any> {
    // TODO: Implement post method to send submission
    return of(null);
  }
}
