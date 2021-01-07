import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SurveyForm } from '../models/survey-form.model';

@Injectable({
  providedIn: 'root',
})
export class TakeSurveyService {

  constructor(private http: HttpClient) {}

  getSurveyForm(token: string): Observable<HttpResponse<Array<any>>> {
    // TODO: Implement http get request
    return of(null);
  }
}
