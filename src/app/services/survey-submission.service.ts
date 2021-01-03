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
    console.log('I submitted: ' + surveySubmission);
    return of(true);
    // return this.http.post<boolean>(this.baseURL, surveySubmission);
  }
}
