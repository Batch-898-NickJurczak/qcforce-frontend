import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SurveyForm } from '../models/survey-form.model';

@Injectable()
export class TakeSurveyService {
  //TODO this is a temporary URL. Needs to be changed for deployment
  baseURL = '';

  constructor(private http: HttpClient) {}

  getSurveyForm(token: string): Observable<HttpResponse<Array<any>>> {
    return this.http.get<HttpResponse<any>>(this.baseURL + 'survey/' + token);
    // const response: HttpResponse<any> = new HttpResponse ({ body: [ `expired`, null ]}) ;
    // return of(response);
  }

  postSurveyForm(surveyForm: SurveyForm): Observable<any> {
    /* validation pending */
    return this.http.post<boolean>(this.baseURL, surveyForm);
  }
}
