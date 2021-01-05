import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { SurveyForm } from '../models/survey-form.model';

@Injectable({
  providedIn: 'root',
})
export class TakeSurveyService {
  // TODO: This is a temporary URL. Needs to be changed for deployment
  baseURL = '';

  constructor(private http: HttpClient) {}

  getSurveyForm(token: string): Observable<Array<any>> {
    return this.http.get<HttpResponse<any>>(this.baseURL + 'survey/' + token).pipe(pluck('body'));
  }

  postSurveyForm(surveyForm: SurveyForm): Observable<any> {
    /* validation pending */
    return this.http.post<boolean>(this.baseURL, surveyForm).pipe(pluck('body'));
  }
}
