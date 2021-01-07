import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { SurveyForm } from '../models/survey-form.model';

@Injectable({
  providedIn: 'root',
})
export class TakeSurveyService {

  baseURL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getSurveyForm(token: string): Observable<Array<any>> {
    let response = this.http.get<Array<any>>(this.baseURL + 'survey-token');
    response.subscribe(content => console.log(content));
    return response;
  }
}
