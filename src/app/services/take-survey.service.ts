import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SurveyForm } from '../models/survey-form.model';

@Injectable({
  providedIn: 'root',
})
export class TakeSurveyService {
  //TODO this is a temporary URL. Needs to be changed for deployment
  baseURL: string = '';

  constructor(private http: HttpClient) {}

  getSurveyForm(token: string): any {
    const response = this.http.get<HttpResponse<any>>(this.baseURL + 'survey/' + token);
    let body;
    response.subscribe((result) => {
      body = result.body;
    });
    return body;
  }

  postSurveyForm(surveyForm: SurveyForm): Observable<any> {
    /* validation pending */
    return this.http.post<boolean>(this.baseURL, surveyForm);
  }
}
