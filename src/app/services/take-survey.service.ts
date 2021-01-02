import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SurveyForm } from '../models/survey-form.model';

@Injectable({
  providedIn: 'root',
})
export class TakeSurveyService {
  baseURL = '';

  constructor(private http: HttpClient) {}

  getSurveyForm(token: string): any {
  }

  postSurveyForm(surveyForm: SurveyForm): Observable<any> {
    /* validation pending */
    return this.http.post<boolean>(this.baseURL, surveyForm);
  }
}
