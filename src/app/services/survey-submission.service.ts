import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SurveySubmission } from '../models/survey-submission.model';

@Injectable({
  providedIn: 'root',
})
export class SurveySubmissionService {
  baseURL = '';

  constructor(private http: HttpClient) {}

  postSurveySubmission(surveySubmission: SurveySubmission): Observable<any> {
    return this.http.post<boolean>(this.baseURL, surveySubmission);
  }
}
